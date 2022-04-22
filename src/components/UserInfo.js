import './UserInfo.css'

function UserInfo(props) {
    return (
    <div className="UserInfo-name">{props.author}</div>
    );
  }

export default UserInfo
