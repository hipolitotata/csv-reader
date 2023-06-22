import { IDivUpload } from "@/types";
import styled, { css } from "styled-components";

const isDragActive = css`
  border: 4px dashed #75c251;
  color: #75c251;
`;

const isDragReject = css`
  border: 4px dashed #ff002b;
  color: #ff002b;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #404040;
`;

export const SubTitle = styled.p`
  margin-bottom: 20px;
  max-width: 300px;
  color: #bfbfbf;
  font-weight: bold;
  line-height: 1.4;
  font-size: 15px;
`;

export const ContainerUpload = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Upload = styled.div`
  width: 100%;
  min-width: 180px;
  height: auto;
  border-radius: 35px 5px;
  background-color: white;
`;

export const DivUpload = styled.div<IDivUpload>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px dashed #dbdbdb;
  color: #dbdbdb;
  font-weight: 800;
  border-radius: 3px;
  width: 80%;
  height: 100px;
  padding: 20px 0px;
  text-align: center;
  cursor: pointer;

  input {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.isDragReject && isDragReject}
  ${(props) => props.isDragActive && !props.isDragReject && isDragActive}
`;

export const DivImage = styled.div`
  width: 100%;
  max-height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0 0 50px;
  margin: 5px 0 20px;
`;

export const ItemImage = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 15px;
  margin: 20px 0px;

  img.img {
    width: 45px;
    height: 40px;
    border-radius: 3px;
  }
`;

export const InfoImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
`;

export const NameImage = styled.p`
  font-size: 14px;
  color: #636363;
`;

export const SizeImage = styled.p`
  font-size: 12px;
  color: #adadad;
  margin-top: 7px;

  span {
    color: #851b1b;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
  background-color: #323232;
  border: 2px solid #323232;
  cursor: pointer;

  &:hover {
    border: 2px solid #fff;
    background: transparent;
    transition: 0.3s;
  }
`;
