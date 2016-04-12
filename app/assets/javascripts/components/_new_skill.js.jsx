
var NewSkill = React.createClass({


  handleClick(){
    var name = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url:'/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } },
      success: (new_skill) => {
        this.props.handleSubmit(new_skill);
      }
    });



  },

  render() {
    return(
      <div>
        <input ref='name' placeholder='enter name of skill here' />
        <input ref='details' placeholder='description of skill here' />
        <button onClick={this.handleClick}>Submit</button>

      </div>
    )
  }
});
