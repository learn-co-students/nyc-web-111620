class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :release_year
      t.string :overview
      t.string :img_url
      t.integer :vote_average
      t.integer :vote_count
      t.string :genre

      t.timestamps
    end
  end
end

  