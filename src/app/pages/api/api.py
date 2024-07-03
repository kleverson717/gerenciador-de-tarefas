from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Exemplo de lista de tarefas
tasks = [
    {'id': 1, 'titulo': 'Tarefa 1', 'descricao': 'Descrição da Tarefa 1', 'status' : 'FUNCIONAL'},
    {'id': 2, 'titulo': 'Tarefa 2', 'descricao': 'Descrição da Tarefa 2', 'status' : 'FUNCIONAL'},
]

@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
