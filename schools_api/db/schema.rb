# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_13_171628) do

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "image_url"
    t.index ["latitude", "longitude"], name: "index_schools_on_latitude_and_longitude"
  end

end
