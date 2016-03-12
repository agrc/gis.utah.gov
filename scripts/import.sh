ruby -rubygems -e 'require "jekyll-import";
JekyllImport::Importers::WordPress.run({
  "dbname"   => "gis_portal",
  "user"     => "root",
  "clean_entities" => false,
  "comments"       => false
})'
