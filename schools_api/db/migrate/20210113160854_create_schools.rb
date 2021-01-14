class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :city
      t.string :state
      t.decimal :latitude
      t.decimal :longitude
      t.string :image_url
    end
  end
end
