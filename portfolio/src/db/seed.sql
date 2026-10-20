INSERT INTO photos (path, width, height, alt_text)
VALUES
    ('man-thumbs-up', 800, 534, 'man giving TWO thumbs up'),
    ('cat', 700, 860, 'a cat'),
    ('yippee', 600, 900, 'man jumping for joy in a field'),
    ('cultist', 3000, 4500, 'robed woman standing behind lit candles')
    ON CONFLICT(path) DO UPDATE SET
        width=excluded.width,
        height=excluded.height,
        alt_text=excluded.alt_text;