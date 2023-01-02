import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { AiOutlineUnlock, AiOutlineFileText } from "react-icons/ai";
import { MdOutlineContactSupport, MdPayment } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const SidebarContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: #2a5965;
`;

export const SidebarTop = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarLogo = styled(Link)`
  color: #fdf2ed;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #fdf2ed;
  }
`;

export const SidebarHr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
`;

export const SidebarCenter = styled.div`
  padding-top: 0.5rem;
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SidebarListItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: #1f424a;
  }
`;

export const SidebarNames = styled.span`
  color: #fdf2ed;
  font-size: 13px;
  font-size: 1rem;
  &:hover {
    color: #fdf2ed;
  }
`;

export const ProfileIcon = styled(CgProfile)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const FlatsIcon = styled(BiBuildingHouse)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const AgreementsIcon = styled(AiOutlineFileText)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const PaymentsIcon = styled(MdPayment)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const LockIcon = styled(AiOutlineUnlock)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const ContactsIcon = styled(MdOutlineContactSupport)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;

export const LogOutIcon = styled(FiLogOut)`
  color: #fdf2ed;
  margin-right: 0.7rem;
  font-size: 1.5rem;
`;
