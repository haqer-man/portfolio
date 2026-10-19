import { sqliteTable, text, integer, real, index, primaryKey, check } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const photo = sqliteTable('photo', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  path: text().unique().notNull(),
  width: integer({ mode: 'number' }).notNull(),
  height: integer({ mode: 'number' }).notNull(),
  dateAdded: integer('date_added', { mode: 'timestamp' }).default(sql`(unixepoch())`).notNull(),
  dateTaken: integer('date_taken', { mode: 'timestamp' }),
  rating: real(),
  viewCount: integer('view_count', { mode: 'number' }).default(0).notNull(),
  altText: text('alt_text'),
  latitude: real(),
  longitude: real(),
},
(table) => [
  check('rating_check', sql`${table.rating} BETWEEN 0.0 AND 5.0`),
  check('photo_coordinates_check', 
    sql`
      (${table.latitude} IS NULL AND ${table.longitude} IS NULL) OR
      (
        (${table.latitude} IS NOT NULL AND ${table.longitude} IS NOT NULL)
        AND ${table.latitude} BETWEEN -90.0 AND 90.0
        AND ${table.longitude} BETWEEN -180.0 AND 180.0
      )
    `)
  ]
);

export const album = sqliteTable('album', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').unique().notNull(),
  dateAdded: integer('date_added', { mode: 'timestamp' }).default(sql`((unixepoch()))`).notNull(),
  coverPhotoPath: text('cover_photo_path').references(() => photo.path, { onDelete: 'set null', onUpdate: 'cascade' }),
  description: text(),
  latitude: real(),
  longitude: real(),
},
(table) => [
  check('album_coordinates_check', 
    sql`
      (${table.latitude} IS NULL AND ${table.longitude} IS NULL) OR
      (
        (${table.latitude} IS NOT NULL AND ${table.longitude} IS NOT NULL)
        AND ${table.latitude} BETWEEN -90.0 AND 90.0
        AND ${table.longitude} BETWEEN -180.0 AND 180.0
      )
    `)
  ]
);

export const photoToAlbum = sqliteTable('photo_to_album', {
  photoId: integer('photo_id').references(() => photo.id, { onDelete: 'cascade' }).notNull(),
  albumId: integer('album_id').references(() => album.id, { onDelete: 'cascade' }).notNull(),
}, (table) => [
  primaryKey({ name: 'pivot_id', columns: [table.albumId, table.photoId] }),
  index("photo_to_album_photo_idx").on(table.photoId)
]);

export type Photo = typeof photo.$inferSelect;
export type PhotoInsert = typeof photo.$inferInsert;

export type Album = typeof album.$inferSelect;
export type AlbumInsert = typeof album.$inferInsert;

export type PhotoToAlbum = typeof photoToAlbum.$inferSelect;
export type PhotoToAlbumInsert = typeof photoToAlbum.$inferInsert;