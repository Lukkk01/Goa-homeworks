function Task(title, desc, state, deadline) {
  this.title = title;        
  this.desc = desc;          
  this.state = state;        
  this.deadline = deadline;   

  this.complete = function() {
    this.state = "done";
    console.log(`Task "${this.title}" marked as complete.`);
  }
}
