from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def handle_form():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    # Process as needed (e.g., save to DB — you can extend later)
    return jsonify({"status": "success", "message": f"Hello {name}!", "email": email}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)