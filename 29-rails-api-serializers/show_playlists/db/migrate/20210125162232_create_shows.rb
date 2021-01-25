class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :title
      t.integer :season
      t.string :genre
      t.belongs_to :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
