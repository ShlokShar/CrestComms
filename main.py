import flask

app = flask.Flask(__name__)

@app.route("/")
def home():
    return flask.render_template("main.html")

@app.route("/post/<title>/<desc>/<flair>/<latitude>/<longitude>")
def post(title, desc, flair, latitude, longitude):
    print(title, desc, flair, latitude, longitude)

if __name__ == "__main__":
    app.run()