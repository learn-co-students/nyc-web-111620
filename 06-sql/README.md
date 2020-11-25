# Intro to SQL

# What is SQL?
 - What problems does it solve?
    - Structured Query Laanguage - Allows us to persist the data in a database
    - Database: The entire environment representing our Application
    - Table: Consolidated chunks of data in our application (Spreadsheet)

SPOTIFY: (Database)
- Artists
    - Name
    - Label
    - Bio
- Songs
  - Title
  - Length
  - Plays 
  - Years created
- Genres
- Users
- Albums/Podcasts

CRUD: Rows of our tables
Create
Read
Update
Delete


1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open s`ource and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?
(READ)

```SQL
  SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"
(READ)
```SQL
  SELECT * FROM artists
  WHERE name = "Black Sabbath";
  -- WHERE name LIKE "%b%"

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
(CREATE)

```sql
  CREATE TABLE fans(
    id INTEGER PRIMARY KEY, 
    name TEXT
  );
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
(UPDATE)
```sql
  ALTER TABLE fans
  ADD artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of Led Zeppelin? ArtistId **22**
(CREATE)
```sql
  INSERT INTO fans (name, artist_id)
  VALUES ("Eric", 22);
```

5.5 Delete a fan
(DELETE)
```sql
  DELETE FROM fans
  WHERE id = 2;
```

6. How would you update your name in the fans table to be your new name?
(UPDATE)
 ```sql 
  UPDATE fans
  SET name = "Super Awesome"
  WHERE id = 1;
 ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
```

8. Write the SQL to display an artists name next to their album title
(READ)

```sql
  SELECT artists.name, albums.title FROM artists
  JOIN albums
  ON artists.id = albums.artist_id
  LIMIT 10;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

AGGREGATE FUNCTION
(READ)
```sql
  SELECT COUNT(tracks.id), albums.title, artists.name FROM artists
  JOIN albums
  ON artists.id = albums.artist_id
  JOIN tracks
  ON tracks.album_id = albums.id
  GROUP BY albums.id
  ORDER BY COUNT(tracks.id) DESC
  LIMIT 25;
```
