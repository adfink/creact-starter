
var Body = React.createClass({

  handleSubmit(new_skill){
    var newState = this.state.skills.concat(new_skill);
    this.setState( { skills:newState } )
  },

  getInitialState(){
    return { skills: [] }
  },

  componentDidMount(){
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleDelete(id) {
  $.ajax({
    url: `/api/v1/skills/${id}`,
    type: 'DELETE',
    success(response) {
      console.log('successfully removed skill', response)
    }
  });
},

  render() {
    return(
      <div>
        <h1>body</h1>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills} handleDelete={this.handleDelete} />
      </div>
    )
  }
});
