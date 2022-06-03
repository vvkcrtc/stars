import React , {Component} from 'react'

function Star(key){
  return (
    <li className="stars-hr" key = {key}>
      <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
        <path d="M0 0h18v18H0z" fill="none"/>
      </svg>
    </li>
  )
}

class Stars extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    }
  };
    
  isDisplay() {
    if (this.state.count > 0 && this.state.count <= 5 ) {
      return true;
    } else {
      return false;
    }
  }  

  displayStars(props) {
    var ratioStars = [];
    
    for(var i = 0; i < props.count; i++) {
      ratioStars.push(<Star key = {i} />);
    }  

    return (
      <ul className="card-body-stars u-clearfix">
        {ratioStars}
      </ul>
    )
  }

  render() {
    const is_display_stars = this.isDisplay();
    console.log("is_display_stars",is_display_stars);
    return (
      <div> { is_display_stars ? (
        <this.displayStars count={this.props.count} />
         ) : (<p>Out Of Range</p> ) }
      </div>
    )
  }  
    
}
    
export default Stars;