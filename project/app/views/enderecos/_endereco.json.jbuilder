json.extract! endereco, :id, :cidade_id, :estado_id, :bairro, :cep, :numero, :created_at, :updated_at
json.url endereco_url(endereco, format: :json)
