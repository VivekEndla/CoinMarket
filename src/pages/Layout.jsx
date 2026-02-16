import React from 'react'
import { useLogoutUserMutation } from '../components/auth/services/authApi';
import { Avatar, Layout, Menu , theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
import { UserOutlined, HomeFilled, BookFilled, LoginOutlined } from '@ant-design/icons';
import { clearUser } from '../components/auth/services/authSlice';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const [logoutUser]=useLogoutUserMutation()
  let user =useSelector((state) => state.auth.user);
  let navigate = useNavigate();
  let dispatch = useDispatch();



  //function to handle click menu
  let handleMenu = async({key}) => {
    if(key==="logout"){
      await handleLogout()
      dispatch(clearUser())
      navigate("/login")
    }else
    navigate(`/dashboard/${key}`);
  }


  let sidebarContent = (
    <>
      <div className='p-3 border border-white'>
        <h3 className='text-white text-upercase  fs-4 border px-2 bg-secondary rounded shadow'>Coin<span className='text-info'>Market</span></h3> 
      </div>
       <Menu theme="dark" mode="inline" defaultSelectedKeys={['Home']} onClick={handleMenu} color='white'
       items={[
       {key:"Home",icon:<HomeFilled/>,label:"Home"},
       {key:"Courses",icon:<BookFilled/>,label:"Courses"},
       {key:"Profile",icon:<HomeFilled/>,label:"Profile"},
       {key:"logout",icon:<LoginOutlined/>,label:"logout"},
      ]} />
       
    </>
  )
  

  //function to handleLogout
  let handleLogout=async()=>{
    await logoutUser()
  }
  return (
    //dashboard layout starts 
    <Layout style={{ minHeight: '100vh' }}>
      {/* sidebar starts */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {sidebarContent}


      </Sider>
       {/* sidebar ends */}
       {/* main section starts */}
       <Layout>
        {/* header starts */}
        <Header style={{ padding: 0, background: "blue" }} >
          <Avatar size={40} src={user?.photoUrl} icon={<UserOutlined/>} />
        </Header>
        {/* header ends */}
        <Content style={{ margin: '24px 16px 0' }}>
          {/* displaying the child elements */}
          <Outlet/>
        </Content>
       </Layout>
       {/* main section ends */}
    </Layout>
    //dashboard layout ends 
  )
}

export default DashboardLayout