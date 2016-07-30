CREATE TABLE brand
(
  id                 BIGSERIAL PRIMARY KEY,
  name               CHARACTER VARYING(50) NOT NULL UNIQUE CHECK (length(name) >= 2),

  version            BIGINT                NOT NULL,
  created_date       TIMESTAMP             NOT NULL,
  last_modified_date TIMESTAMP             NOT NULL
)