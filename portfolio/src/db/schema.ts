import { sqliteTable, text, integer, real, index, primaryKey, check } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const photos = sqliteTable('photos', {
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

export const albums = sqliteTable('albums', {
  id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').unique().notNull(),
  dateAdded: integer('date_added', { mode: 'timestamp' }).default(sql`((unixepoch()))`).notNull(),
  coverPhotoPath: text('cover_photo_path').references(() => photos.path, { onDelete: 'set null', onUpdate: 'cascade' }),
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

export const photosToAlbum = sqliteTable('photos_to_album', {
  photoId: integer('photo_id').references(() => photos.id, { onDelete: 'cascade' }).notNull(),
  albumId: integer('album_id').references(() => albums.id, { onDelete: 'cascade' }).notNull(),
}, (table) => [
  primaryKey({ name: 'pivot_id', columns: [table.albumId, table.photoId] }),
  index("photo_to_album_photo_idx").on(table.photoId)
]);

export type Photo = typeof photos.$inferSelect;
export type PhotoInsert = typeof photos.$inferInsert;
export type LightweightPhoto = Pick<Photo, "id" | "path" | "width" | "height" | "altText">;


export type Album = typeof albums.$inferSelect;
export type AlbumInsert = typeof albums.$inferInsert;

export type PhotoToAlbum = typeof photosToAlbum.$inferSelect;
export type PhotoToAlbumInsert = typeof photosToAlbum.$inferInsert;