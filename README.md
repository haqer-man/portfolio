# portfolio
This is a portfolio hub for my robotics, CS, photography, and music portfolios.

There is a dev-tool vulnerability in the npm packages from esbuild that I can't get to go away.

Photos database structure:

Photos table:

* photo_ID INTEGER PRIMARY KEY
* base_path TEXT UNIQUE NOT NULL
  * ON CONFLICT DO UPDATE width, height, alt_text, date_taken, latitude, longitude
* latitude REAL optional
* longitude REAL optional
* width INTEGER NOT NULL ON CONFLICT UPDATE
* height INTEGER NOT NULL ON CONFLICT UPDATE
* alt_text TEXT optional
* rating REAL optional CHECK (rating BETWEEN 0.0 AND 5.0)
* view_count INTEGER Default 0 NOT NULL
* date_added TEXT NOT NULL DEFAULT current_timestamp
* date_taken TEXT optional
* CONSTRAINT bothPhotoCoordinates CHECK(
latitude is NULL and longitude is NULL or
latitude is NOT NULL and longitude is NOT NULL and
(latitude -90 to 90, longitude -180 to 180).)

Albums table:

* album_ID INTEGER PRIMARY KEY
* album_name TEXT UNIQUE NOT NULL
* latitude REAL optional
* longitude REAL optional
* date_added TEXT NOT NULL DEFAULT current_timestamp
* cover_photo_path TEXT REFERENCES photos(base_path) optional ON DELETE SET NULL
* description TEXT optional
* CONSTRAINT bothAlbumCoordinates CHECK(
latitude is NULL and longitude is NULL or
latitude is NOT NULL and longitude is NOT NULL and
(latitude -90 to 90, longitude -180 to 180).)

Pivot table:
* primary key (foreign key album_ID, foreign key photo_ID)
* foreign key album_ID INTEGER REFERENCES albums(album_ID) NOT NULL ON DELETE CASCADE
* foreign key photo_ID INTEGER REFERENCES photos(photo_ID) NOT NULL ON DELETE CASCADE


<br></br>

# About the site

### Pages the site will have:

- <b>Main Home</b>
    - Contact me form
    - About me
- <b>RBE Home</b>
    - RBE Projects
    - RBE Resume?
- <b>CS Home</b>
    - CS Projects
    - CS Resume?
- <b>Photography Home</b> - will have waterfall view of photos
    - Albums
    - contact page and form

### Frameworks Implemented

- React
- Flask
- Will have a map UI

<br></br>

# Plans

### Version 1 Features

<b>Photo gallery:</b>
- Users can view images in a waterfall view
- Photos can be accessed through albums
- Users are able to fill out a form to contact me
- Photos stored in database (figure out what data should be in the database vs. in the photos)


### Future features

<b>Photo gallery:</b>
- Photos will have a map view to see where they were taken


# Photo Gallery
This is a website for viewing/hosting photos I've taken at events/in the wild.


<hr style="height: 2px; border: none; background-color: white;" />

# Milestones

### Phase 1:  <u>React Frontend</u>


Build:
* Main home page
* Photography home page
* Albums page
* Contact page and form

### Phase 2: <u>Flask API</u>

Create endpoints:
* /photos
* /albums
* /locations

Add Python to .gitignore

### Phase 3: <u>Database</u>

Make tables for data in endpoints.

### Phase 4: <u>Map Feature</u>