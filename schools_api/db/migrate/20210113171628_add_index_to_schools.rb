class AddIndexToSchools < ActiveRecord::Migration[6.0]
  def change
    add_index :schools, [:latitude, :longitude]
  end
end
