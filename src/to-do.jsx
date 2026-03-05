// Option-1: Normal method
// export default function ToDO({task, isDone}) {
//    return(
//       <li>Task: {task}</li>
//    )
// }
// Option-2 :Conditional except else 
// export default function ToDO ({task, isDone, time = 0}){
//    if(isDone){
//       return(
//          <li>Done: {task} and Duration: {time}</li>
//       )
//    }
//       return(
//          <li>Pending: {task}</li>
//       )
// }
// Option-03 : Ternary Condition
// export default function ToDO({task, isDone, time = 0}){
//    return(
//       isDone ? <li>Done: {task}. Duration: {time}</li> : <li>Not Done: {task}</li>
//    )
// }
//option-4: Only if it is true
// export default function ToDO({task, isDone, time = 0}){
//    return(
//       isDone && <li>Done: {task}. Duration: {time}</li> 
//    )
// }
// option-5: