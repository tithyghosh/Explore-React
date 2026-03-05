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
//option-4: Only if it is true with &&
// export default function ToDO({task, isDone, time = 0}){
//    return(
//       isDone && <li>Done: {task}. Duration: {time}</li> 
//    )
// }
// option-5: With Or ||
// export default function ({task, isDone, time = 0}){
//    return(
//       isDone || <li>Not Done: {task}. Duration:{time}</li>
//    )
// }
// Option-06: Use Variable
// export default function({task, isDone, time = 0}){
//    let listItem;
//    if(isDone === true){
//       listItem = <li>Done: {task}. Duration: {time}</li>
//    }
//    else{
//       listItem = <li>pending: {task}</li>
//    }
//    return listItem
// }