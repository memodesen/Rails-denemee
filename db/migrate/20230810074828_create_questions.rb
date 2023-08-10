class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.id  :id
      t.string :question
      t.text :answers
      t.string :answer

      t.timestamps
    end
  end
end
