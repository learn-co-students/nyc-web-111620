class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :tagline
      t.string :fav_genre

      t.timestamps
    end
  end
end
