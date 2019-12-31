from flask import Flask,send_from_directory
app = Flask(__name__)

@app.route("/")
def angularApp():
    return send_from_directory('./static','index.html')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

@app.errorhandler(500)
def server_error(e):
  return 'An internal error occurred %s' % e, 500