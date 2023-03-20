const App = () => {

  const course = {
    name: 'Half Stack application development',
    course: [
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
  const Header = () => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  

  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part name={course.course[0].name} exercises={course.course[0].exercises}/>
        <Part name={course.course[1].name} exercises={course.course[1].exercises}/>
        <Part name={course.course[2].name} exercises={course.course[2].exercises}/>
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        Number of exercises {course.course[0].exercises + course.course[1].exercises + course.course[2].exercises}
      </div>
    )
  }
  

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
export default App