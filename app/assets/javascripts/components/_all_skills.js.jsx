var AllSkills = React.createClass({


  handleDelete(){
    console.log("delete me");
  },

  render(){
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level} </p>
          <p>{skill.details}</p>
          <button ref={skill.id} onClick={this.handleDelete}>Delete Skill</button>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }

});
