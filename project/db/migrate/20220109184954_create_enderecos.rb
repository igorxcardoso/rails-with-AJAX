class CreateEnderecos < ActiveRecord::Migration[5.2]
  def change
    create_table :enderecos do |t|
      t.references :cidade, foreign_key: true
      t.references :estado, foreign_key: true
      t.string :bairro
      t.string :cep
      t.integer :numero

      t.timestamps
    end
  end
end
