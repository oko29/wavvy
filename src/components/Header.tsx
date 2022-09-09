import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.black};
`;

const Nav = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  margin-right: 80px;
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
  &:hover {
    cursor: pointer;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li<{ location: any }>`
  position: relative;
  margin: 20px 30px 20px 0;
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 500;
  color: ${(props) => props.theme.color.gray};
  &:hover {
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
  }
  &.home {
    color: ${(props) => (props.location.pathname === "/" ? "#fff" : "#a5a5a5")};
  }
  &.category {
    color: ${(props) =>
      props.location.pathname === "/categories" ? "#fff" : "#a5a5a5"};
  }
  &.member {
    color: ${(props) =>
      props.location.pathname === "/member" ? "#fff" : "#a5a5a5"};
  }
`;

const CategoryList = styled.ul`
  display: none;
  width: 150px;
  min-height: 200px;
  position: absolute;
  top: 65px;
  padding: 20px 15px;
  background-color: #101010;
  color: ${(props) => props.theme.color.gray};
  cursor: pointer;
  li {
    margin-bottom: 15px;
    &:first-child {
      color: ${(props) => props.theme.color.white};
      font-weight: 600;
    }
    &:hover {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

const CategoryBar = styled.div`
  position: relative;
  &:hover {
    ${CategoryList} {
      display: show;
    }
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.blue};
`;

const Search = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray};
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 270px;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  width: 300px;
  padding: 10px 0;
  padding-left: 35px;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.size.normal};
  color: ${(props) => props.theme.color.gray};
  background-color: #000000;
  &::placeholder {
    font-weight: 600;
    font-size: ${(props) => props.theme.size.normal};
    color: ${(props) => props.theme.color.gray};
  }
  &:focus {
    outline: none;
  }
`;
const Login = styled.span<{ location: any }>`
  position: relative;
  margin-left: 30px;
  font-size: ${(props) => props.theme.size.xl};
  font-weight: 500;
  color: ${(props) =>
    props.location.pathname === "/login" ? "#fff" : "#a5a5a5"};
  &:hover {
    cursor: pointer;
  }
`;

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState("");
  const location = useLocation();
  const homeMatch = useMatch("/");
  const categoryMatch = useMatch("/categories");
  const myMatch = useMatch("/member");
  const loginMatch = useMatch("/login");

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setValue("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const resetInput = () => {
    setValue("");
  };
  return (
    <NavWrapper>
      <Nav>
        <Col>
          <Logo>
            <Link to="/">Wavvy</Link>
          </Logo>
          <Items>
            <Link to="/">
              <Item className="home" location={location}>
                홈{homeMatch && <Circle layoutId="circle" />}
              </Item>
            </Link>
            <CategoryBar>
              <Link to="/categories">
                <Item className="category" location={location}>
                  카테고리{categoryMatch && <Circle layoutId="circle" />}
                </Item>
              </Link>
              <CategoryList>
                <li>추천 메뉴</li>
                <li>드라마</li>
                <li>영화</li>
                <li>다큐멘터리</li>
              </CategoryList>
            </CategoryBar>
            <Link to="/member">
              <Item className="member" location={location}>
                MY{myMatch && <Circle layoutId="circle" />}
              </Item>
            </Link>
          </Items>
        </Col>
        <Col>
          <Search>
            <Icon
              onClick={toggleSearch}
              animate={{ x: searchOpen ? -265 : 0 }}
              transition={{ type: "linear", duration: 0.5 }}
            >
              <AiOutlineSearch size={24} />
            </Icon>
            <Icon
              onClick={resetInput}
              animate={{ scale: searchOpen ? 1 : 0 }}
              transition={{ type: "linear", duration: 0.5 }}
            >
              <MdCancel size={24} />
            </Icon>
            <Input
              animate={{ scaleX: searchOpen ? 1 : 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              type="text"
              value={value}
              onChange={onChange}
              placeholder="제목, 장르, 배우로 찾아보세요."
            />
          </Search>
          <Link to="/login">
            <Login location={location}>로그인 {loginMatch && <Circle />}</Login>
          </Link>
        </Col>
      </Nav>
    </NavWrapper>
  );
}

export default Header;
