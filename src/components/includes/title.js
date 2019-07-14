import React from 'react';

class Title extends React.Component {
  render() {
    return <div className="title_block">
      <div className="thisTitle" style={{color: this.props.color}}>{this.props.title}</div>
      <div className="thisSubTitle" style={{color: this.props.subcolor}}>{this.props.subtitle}</div>
      <div className="titleLine">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve"><g><g>
        <g>
          <path d="M498.682,435.326L297.917,234.56L63.357,0H45.026l-3.743,9.511c-9.879,25.104-14.1,50.78-12.205,74.249    c2.16,26.752,12.323,49.913,29.392,66.982L241.58,333.852l24.152-24.152l169.285,189.293c16.84,16.84,45.825,17.84,63.665,0    C516.236,481.439,516.236,452.879,498.682,435.326z" data-original="#000000" className="active-path" data-old_color="#000000" fill={this.props.color}/>
        </g>
      </g><g>
        <g>
          <path d="M156.728,291.442L13.317,434.853c-17.552,17.552-17.552,46.113,0,63.665c16.674,16.674,45.519,18.146,63.665,0    l143.412-143.412L156.728,291.442z" data-original="#000000" className="active-path" data-old_color="#000000" fill={this.props.color}/>
        </g>
      </g><g>
        <g>
          <path d="M490.253,85.249l-81.351,81.35l-21.223-21.222l81.351-81.351l-21.222-21.222l-81.35,81.35l-21.222-21.222l81.351-81.35    L405.366,0.361L299.256,106.471c-12.981,12.981-20.732,30.217-21.828,48.535c-0.277,4.641-1.329,9.206-3.074,13.548l68.929,68.929    c4.342-1.747,8.908-2.798,13.548-3.075c18.318-1.093,35.554-8.846,48.535-21.827l106.11-106.109L490.253,85.249z" data-original="#000000" className="active-path" data-old_color="#000000" fill={this.props.color}/>
        </g>
      </g></g> </svg>
      </div>
    </div>
  }
}

export default Title;
