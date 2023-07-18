import React from 'react'
import ReactDOM from 'react-dom'

/**
 const Title = ({course}) => <h1>{course}</h1> ##one liner##
 */

const Title = (props) => {
  console.log(props)
  return <h1> {props.course} </h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => (
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
)

const Total = (props) => {  
  const totalExercises = props.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);

  return <p>Number of exercises: {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <Title course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))