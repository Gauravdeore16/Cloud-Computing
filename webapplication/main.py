from flask import Flask, render_template, request

app = Flask(__name__)

students = []

@app.route('/')
def index():
    return render_template('index.html', students=students)

@app.route('/add', methods=['POST'])
def add_student():
    name = request.form['name']
    roll = request.form['roll']
    students.append({'name': name, 'roll': roll})
    return render_template('index.html', students=students)

if __name__ == '__main__':
    app.run()
