import * as React from "react"
import { Link } from "gatsby"






import styled from "styled-components";

const FrameIcon = styled.img`
  position: relative;
  width: 99.95px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Career = styled.div`
  position: relative;
`;
const CareerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const TradeNowWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) 32px;
  box-sizing: border-box;
  font-size: var(--font-size-base);
  color: var(--color-black);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 56px;
`;
const TopNav = styled.div`
  align-self: stretch;
  background-color: rgba(42, 93, 50, 0.2);
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-197xl);
  gap: 387px;
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--color-gray-100);
`;
const ItsTimeTo = styled.p`
  margin: 0;
`;
const The = styled.span``;
const Future = styled.span`
  background: linear-gradient(96.58deg, #78e65d, #d5fa39);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ItsTimeToContainer = styled.b`
  position: absolute;
  top: 0%;
  left: 0%;
  letter-spacing: -4.19px;
  line-height: 100px;
`;
const Future1 = styled.b`
  position: absolute;
  top: 50.5%;
  left: 41.41%;
  letter-spacing: -4.19px;
  line-height: 100px;
  background: linear-gradient(
    96.58deg,
    rgba(212, 249, 56, 0.7),
    rgba(213, 250, 57, 0.7)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: blur(33.52px);
`;
const ItsTimeToTradeTheFutureParent = styled.div`
  position: relative;
  width: 693px;
  height: 202px;
  font-size: var(--font-size-77xl);
`;
const DerivatesMadeSimple = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-100);
  display: none;
`;
const TradeBtcEth = styled.div`
  position: relative;
  text-transform: capitalize;
  color: var(--neutrals-grey-4);
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
`;
const ShadowIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock1 = styled.img`
  position: absolute;
  top: 10.1px;
  left: 12.43px;
  width: 235.44px;
  height: 508.04px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock = styled.div`
  position: absolute;
  top: 73.57px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
`;
const ShadowIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 260.41px;
  height: 527.79px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 260.41px;
  height: 527.79px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock3 = styled.img`
  position: absolute;
  top: 10.07px;
  left: 12.39px;
  width: 234.6px;
  height: 506.24px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock2 = styled.div`
  position: absolute;
  top: 75px;
  left: 519.18px;
  width: 260.41px;
  height: 527.79px;
`;
const ShadowIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 329.93px;
  height: 668.7px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 329.93px;
  height: 668.7px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock5 = styled.img`
  position: absolute;
  top: 12.75px;
  left: 15.7px;
  width: 297.24px;
  height: 641.39px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock4 = styled.div`
  position: absolute;
  top: 0px;
  left: 225.78px;
  width: 329.93px;
  height: 668.7px;
`;
const Iphone14ProSpaceBlackMockParent = styled.div`
  position: relative;
  width: 779.59px;
  height: 668.7px;
`;
const Hero = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0px var(--padding-101xl);
  gap: 76px;
  font-size: var(--font-size-5xl);
`;
const Career1 = styled.b`
  position: relative;
`;
const ConversionFee = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  font-weight: 500;
  color: var(--color-darkgray-100);
`;
const Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1.5px;
  height: 172px;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px rgba(235, 255, 37, 0.2);
  backdrop-filter: blur(52.5px);
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LandingPageInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-197xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--electric-green-primary);
`;
const GroupChild = styled.img`
  position: absolute;
  height: 102.19%;
  width: 103.43%;
  top: -1.1%;
  right: -1.81%;
  bottom: -1.1%;
  left: -1.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.58%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 58.47%;
  width: 76.48%;
  top: 0%;
  right: 12.96%;
  bottom: 41.53%;
  left: 10.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const OneAppEndlessContainer = styled.div`
  position: absolute;
  top: 61.96%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent1 = styled.div`
  position: absolute;
  height: 56.8%;
  width: 61.51%;
  top: 20.94%;
  right: 19.1%;
  bottom: 22.26%;
  left: 19.39%;
`;
const GroupDiv = styled.div`
  position: relative;
  width: 276.38px;
  height: 560px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 100.5%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.25%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild2 = styled.img`
  position: absolute;
  height: 31.14%;
  width: 43.42%;
  top: 0%;
  right: 31.38%;
  bottom: 68.86%;
  left: 25.2%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FutureOfDerivativeContainer = styled.div`
  position: absolute;
  top: 46.66%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent2 = styled.div`
  position: absolute;
  height: 40.51%;
  width: 54.63%;
  top: 24.9%;
  right: 22.54%;
  bottom: 34.59%;
  left: 22.83%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 100.44%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.2%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 102.14%;
  width: 103.58%;
  top: -1.04%;
  right: -1.79%;
  bottom: -1.1%;
  left: -1.79%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 1.45%;
  width: 2.41%;
  top: 29.24%;
  right: 62.67%;
  bottom: 69.31%;
  left: 34.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild3 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 24.41%;
  right: 55.86%;
  bottom: 75.25%;
  left: 43.44%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild4 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 34.54%;
  right: 60.91%;
  bottom: 65.11%;
  left: 38.39%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild5 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 38.9%;
  right: 55.69%;
  bottom: 60.76%;
  left: 43.62%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild6 = styled.div`
  position: absolute;
  height: 0.19%;
  width: 0.39%;
  top: 37.82%;
  right: 42.74%;
  bottom: 61.99%;
  left: 56.87%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild7 = styled.div`
  position: absolute;
  height: 0.55%;
  width: 1.12%;
  top: 25.78%;
  right: 41.51%;
  bottom: 73.67%;
  left: 57.37%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild8 = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 58.99%;
  right: 98.99%;
  bottom: 37.92%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupChild9 = styled.div`
  position: absolute;
  height: 4.28%;
  width: 1.01%;
  top: 23.12%;
  right: -1.01%;
  bottom: 72.6%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const IsNowHereContainer = styled.div`
  position: absolute;
  top: 57.5%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupChild10 = styled.img`
  position: absolute;
  height: 35.41%;
  width: 43.25%;
  top: 0%;
  right: 27.17%;
  bottom: 64.59%;
  left: 29.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IsNowHereForYouParent = styled.div`
  position: absolute;
  height: 34.02%;
  width: 64.04%;
  top: 25.78%;
  right: 17.98%;
  bottom: 40.2%;
  left: 17.98%;
`;
const VectorGroup = styled.div`
  position: relative;
  width: 276.38px;
  height: 560.3px;
`;
const GroupContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
  font-size: var(--font-size-14xl-5);
`;
const PayLess = styled.span`
  color: var(--electric-green-primary);
`;
const TradeMorePayContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const OurLowFees = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.09px;
`;
const TradeMorePayLessParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameIcon1 = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.12%;
  top: 0%;
  right: 22.88%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.1;
`;
const B3 = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const TakerFees = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent11 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 42.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Parent2 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 45.83px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image92Icon = styled.img`
  position: absolute;
  top: 55px;
  left: calc(50% - 73.33px);
  width: 146px;
  height: 30px;
  object-fit: cover;
  opacity: 0.5;
`;
const FrameParent1 = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--neutrals-grey-9);
  height: 438px;
  overflow: hidden;
`;
const FrameIcon2 = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.12%;
  top: 0%;
  right: 22.88%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.02;
  mix-blend-mode: multiply;
`;
const TakerFees1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent3 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 52.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const Parent4 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 56.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameIcon3 = styled.img`
  position: relative;
  width: 183.25px;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: calc(50% - 100.33px);
  box-shadow: 0px 0px 30px #e2ff6f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 125.11%;
  width: 114.79%;
  top: 0%;
  right: -14.79%;
  bottom: -25.11%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent2 = styled.div`
  flex: 1;
  position: relative;
  background: linear-gradient(
    179.64deg,
    #daf760 17.19%,
    rgba(50, 216, 117, 0.96)
  );
  box-shadow: 0px 0px 40px rgba(226, 255, 111, 0.8);
  height: 438px;
  overflow: hidden;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
`;
const Image93Icon = styled.img`
  position: absolute;
  top: 45px;
  left: calc(50% - 95.67px);
  width: 192px;
  height: 61px;
  object-fit: cover;
  opacity: 0.7;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-131xl);
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
`;
const ExploreTheMarketsLikeItIsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 368.3px;
  left: 3.91px;
  width: 1131px;
  height: 303px;
  object-fit: cover;
`;
const ChartIcon = styled.img`
  position: absolute;
  top: 20.3px;
  left: 122.91px;
  width: 892.37px;
  height: 445.79px;
`;
const GroupChild11 = styled.img`
  position: absolute;
  top: 170.3px;
  left: 137.91px;
  width: 802px;
  height: 430px;
  opacity: 0.3;
  mix-blend-mode: difference;
`;
const GroupChild12 = styled.img`
  position: absolute;
  top: 118.3px;
  left: 104.91px;
  width: 868px;
  height: 482px;
  opacity: 0.05;
  mix-blend-mode: difference;
`;
const FrameChild1 = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
`;
const Bitcoin = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 20px;
  font-weight: 500;
`;
const Btcusdt = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-41);
`;
const BitcoinParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const GroupParent3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const VectorIcon5 = styled.img`
  position: relative;
  width: 74.25px;
  height: 28.25px;
`;
const FrameParent7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 15px;
  font-weight: 500;
`;
const A = styled.a`
  position: relative;
  font-size: var(--mobile-title-3-medium-size);
  letter-spacing: 0.2px;
  line-height: 28px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
  text-decoration: none;
`;
const PriceParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const M = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
`;
const VolParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--sematics-green);
`;
const FrameParent9 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent8 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  font-size: var(--mobile-caption-3-size);
  color: var(--neutrals-grey-41);
`;
const FrameParent6 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--neutrals-grey-2);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-lgi);
`;
const VectorIcon6 = styled.img`
  position: relative;
  width: 74.25px;
  height: 33.94px;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--mobile-title-3-medium-size);
  letter-spacing: 0.2px;
  line-height: 28px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
`;
const FrameParent5 = styled.div`
  position: absolute;
  top: 224.24px;
  left: 137.95px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const TextureIcon1 = styled.img`
  position: absolute;
  height: 97.12%;
  top: 0%;
  bottom: 2.88%;
  left: calc(50% - 567.45px);
  max-height: 100%;
  width: 1087px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 1134.91px;
  height: 671.3px;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--neutrals-grey-91);
`;
const ExploreMarketsWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-29xl);
  box-sizing: border-box;
  font-size: var(--mobile-title-3-medium-size);
  color: var(--color-black);
`;
const FrameParent4 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-45xl);
  text-align: left;
`;
const Span = styled.span`
  color: #d4f938;
`;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const UnlockNewFrontiersContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 846px;
`;
const AreYouA = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.09px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const SameStrategiesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FrameChild4 = styled.img`
  position: relative;
  width: 1px;
  height: 88px;
`;
const FrameParent19 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-300);
  backdrop-filter: blur(52.5px);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 1140px;
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-13xl);
  color: var(--white);
`;
const GroupChild13 = styled.img`
  position: absolute;
  top: 7.88px;
  left: 0px;
  width: 684.5px;
  height: 413.5px;
`;
const FrameChild7 = styled.img`
  position: relative;
  width: 19px;
  height: 19px;
`;
const GroupParent7 = styled.div`
  position: absolute;
  top: 207px;
  left: 101px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent8 = styled.div`
  position: absolute;
  top: 32px;
  left: 264px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild9 = styled.img`
  position: relative;
  width: 19px;
  height: 18.5px;
`;
const GroupParent9 = styled.div`
  position: absolute;
  top: 0px;
  left: 506px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent10 = styled.div`
  position: absolute;
  top: 384px;
  left: 152px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const GroupParent11 = styled.div`
  position: absolute;
  top: 194px;
  left: 425px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const VectorContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 684.5px;
  height: 421.5px;
`;
const Btcusdt1 = styled.div`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: var(--font-size-5xl);
  color: var(--white);
`;
const GroupParent6 = styled.div`
  flex: 1;
  position: relative;
  height: 420px;
  overflow: hidden;
`;
const FrameChild12 = styled.img`
  align-self: stretch;
  position: relative;
  max-height: 100%;
  width: 1px;
`;
const GroupChild14 = styled.img`
  position: absolute;
  top: 5.13px;
  right: -262.5px;
  width: 662.5px;
  height: 305.98px;
`;
const GroupParent13 = styled.div`
  position: absolute;
  top: 65px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild14 = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
`;
const GroupParent14 = styled.div`
  position: absolute;
  top: 104px;
  right: 529px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent15 = styled.div`
  position: absolute;
  top: 0px;
  right: 85px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent16 = styled.div`
  position: absolute;
  top: 282px;
  right: 621px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent17 = styled.div`
  position: absolute;
  top: 291px;
  right: 297px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const VectorParent1 = styled.div`
  position: absolute;
  top: 64px;
  right: 0px;
  width: 687px;
  height: 311px;
`;
const Nifty = styled.div`
  position: absolute;
  top: 355px;
  left: 302px;
  font-size: var(--font-size-5xl);
  text-transform: uppercase;
  color: var(--white);
  text-align: right;
`;
const GroupParent12 = styled.div`
  position: relative;
  width: 400px;
  height: 420px;
  overflow: hidden;
  flex-shrink: 0;
  color: var(--color-mediumspringgreen-100);
`;
const FrameParent21 = styled.div`
  position: absolute;
  top: 34.01px;
  left: 54px;
  width: 966px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextureIcon2 = styled.img`
  position: absolute;
  height: 100%;
  top: 0%;
  bottom: 0%;
  left: calc(50% - 565px);
  max-height: 100%;
  width: 1130px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent20 = styled.div`
  position: relative;
  width: 1130px;
  height: 510px;
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--color-tomato);
`;
const FrameParent18 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-131xl) 0px;
  gap: var(--gap-45xl);
  color: var(--electric-green-primary);
`;
const DeposityAMinimum = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-8);
  display: inline-block;
  width: 659.09px;
`;
const StartSmallEarnBigParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Icon = styled.img`
  position: absolute;
  top: 52px;
  left: 43px;
  width: 190.85px;
  height: 119.22px;
`;
const DepositBonus = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
  display: inline-block;
  width: 175.5px;
`;
const OurAssetsLiquidity = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 15.75px;
  line-height: 23.63px;
  color: var(--neutrals-grey-61);
`;
const DepositBonusParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 424px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const TextureIcon3 = styled.img`
  position: absolute;
  height: 144.89%;
  top: 0%;
  bottom: -44.89%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 751px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameIcon5 = styled.img`
  position: absolute;
  top: 0.52px;
  right: 0px;
  width: 304.19px;
  height: 272.95px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: soft-light;
`;
const AsSomeoneWhosAlwaysLookinParent = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--color-whitesmoke);
  height: 450px;
  overflow: hidden;
`;
const DedicatedRelationshipManagerContainer = styled.b`
  align-self: stretch;
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const DedicatedRelationshipManagerParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 446px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const Manager1Icon = styled.img`
  position: absolute;
  top: 54px;
  left: 48.75px;
  width: 158.24px;
  height: 104.8px;
`;
const TextureIcon4 = styled.img`
  position: absolute;
  height: 154.22%;
  top: 0%;
  bottom: -54.22%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 668px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent23 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const FrameParent22 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-98xl) var(--padding-141xl);
  gap: 91px;
  color: var(--white1);
`;
const DerivatesMadeSimpleContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 80px;
  display: inline-block;
  width: 936px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const FrameChild18 = styled.img`
  position: relative;
  width: 646.03px;
  height: 646.03px;
`;
const FrameChild19 = styled.img`
  position: relative;
  width: 119.56px;
  height: 120px;
`;
const CreateAnAccount = styled.div`
  position: relative;
  font-weight: 500;
`;
const RegisterComplete = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32px;
  color: var(--color-darkgray-100);
  display: inline-block;
  width: 384px;
`;
const CreateAnAccountParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
`;
const TradeNowContainer = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  width: 216px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-29xl);
  box-sizing: border-box;
  font-size: var(--mobile-title-3-medium-size);
  color: var(--color-black);
`;
const FrameParent26 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-17xl);
`;
const GroupParent19 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const GroupParent18 = styled.div`
  width: 1442px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameChild20 = styled.img`
  position: relative;
  width: 1134px;
  height: 1px;
  opacity: 0.4;
`;
const FrameChild22 = styled.img`
  position: relative;
  width: 107.11px;
  height: 100px;
`;
const GroupParent20 = styled.div`
  width: 1446px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameChild25 = styled.img`
  position: relative;
  width: 115.81px;
  height: 120px;
`;
const FrameParent25 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const DerivatesMadeSimpleIn3EasParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px;
  gap: var(--gap-101xl);
`;
const BackedByTheBestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image109Icon = styled.img`
  position: relative;
  width: 184.62px;
  height: 40px;
  object-fit: cover;
`;
const Image110Icon = styled.img`
  position: relative;
  width: 124.24px;
  height: 100px;
  object-fit: cover;
`;
const Image111Icon = styled.img`
  position: relative;
  width: 108.22px;
  height: 64px;
  object-fit: cover;
`;
const Image112Icon = styled.img`
  position: relative;
  width: 182.02px;
  height: 64px;
  object-fit: cover;
`;
const Image113Icon = styled.img`
  position: relative;
  width: 120px;
  height: 120.92px;
  object-fit: cover;
`;
const Image114Icon = styled.img`
  position: relative;
  width: 236px;
  height: 24px;
  object-fit: cover;
`;
const Image115Icon = styled.img`
  position: relative;
  width: 219.7px;
  height: 40px;
  object-fit: cover;
`;
const Image109Parent = styled.div`
  width: 954px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-61xl);
`;
const UtsavsomaniBackgroundRemoved = styled.img`
  position: relative;
  width: 120px;
  height: 138px;
  object-fit: cover;
`;
const AdityaNagarsheth = styled.p`
  margin-block-start: 0;
  margin-block-end: 0.72px;
`;
const UtsavsomaniBackgroundRemovedParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
`;
const AdityaNagarsheth1 = styled.b``;
const PerpetualValuePartners = styled.p`
  margin: 0;
  font-size: var(--font-size-smi-8);
  line-height: 160%;
  font-weight: 500;
  color: var(--color-slategray);
`;
const PicABackgroundRemoved1Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ImageBackgroundRemoved1 = styled.img`
  position: relative;
  width: 120px;
  height: 138.57px;
  object-fit: cover;
`;
const FrameParent31 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
`;
const FrameParent30 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-197xl);
  gap: var(--gap-61xl);
  font-size: 20.48px;
`;
const AsSomeoneWhos = styled.div`
  position: absolute;
  top: 40px;
  left: 29px;
  line-height: 28px;
  display: inline-block;
  width: 303px;
`;
const PrakashJamatia = styled.b`
  position: absolute;
  top: 278px;
  left: 29px;
  font-size: var(--font-size-9xl);
  letter-spacing: -1px;
  line-height: 0%;
  color: var(--white1);
`;
const FounderTradeshala = styled.div`
  position: absolute;
  top: 346px;
  left: 29px;
  font-size: var(--font-size-base);
  font-weight: 500;
`;
const TextureIcon5 = styled.img`
  position: absolute;
  height: 144.89%;
  top: 0%;
  bottom: -44.89%;
  left: calc(50% - 181px);
  max-height: 100%;
  width: 751px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameIcon7 = styled.img`
  position: absolute;
  height: 60.66%;
  top: 0.12%;
  right: 0px;
  bottom: 39.23%;
  max-height: 100%;
  width: 304.19px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: soft-light;
`;
const Unsplashieebwgy6laIcon = styled.img`
  position: absolute;
  top: 277px;
  left: 203px;
  width: 186px;
  height: 187px;
  object-fit: cover;
`;
const FrameChild26 = styled.img`
  position: absolute;
  height: 23.07%;
  width: 30.03%;
  top: 6%;
  right: 7.19%;
  bottom: 70.93%;
  left: 62.78%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.04;
`;
const Unsplasho5nbw8gtnmcIcon = styled.img`
  position: absolute;
  top: 235px;
  left: 169px;
  width: 216px;
  height: 248px;
  object-fit: cover;
`;
const Unsplashzhvm3xiohoeIcon = styled.img`
  position: absolute;
  top: 228px;
  right: -40px;
  width: 239px;
  height: 239px;
  object-fit: cover;
`;
const FrameParent33 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--neutrals-grey-61);
`;
const FrameParent32 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-98xl) var(--padding-141xl);
  gap: var(--gap-45xl);
  color: var(--white1);
`;
const FrameChild29 = styled.img`
  position: relative;
  width: 247.72px;
  height: 228.77px;
`;
const NoComplexityOf = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
`;
const EarnMoneyTheEasyWayParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const GroupParent24 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: center;
`;
const FrameIcon10 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 279.96px;
  height: 239.01px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: multiply;
`;
const ShareYourYour = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const FrameChild30 = styled.img`
  position: absolute;
  top: 33px;
  left: 30px;
  width: 103.69px;
  height: 90.4px;
`;
const TextureIcon8 = styled.img`
  position: absolute;
  height: 101.24%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: -1.24%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent36 = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-9);
  width: 323px;
  height: 323px;
  overflow: hidden;
  flex-shrink: 0;
`;
const InviteFriendsTo = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 264px;
`;
const FrameChild31 = styled.img`
  position: absolute;
  height: 29.8%;
  width: 33.63%;
  top: 11.15%;
  right: 56.66%;
  bottom: 59.06%;
  left: 9.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameChild32 = styled.img`
  position: absolute;
  height: 32.36%;
  width: 30.03%;
  top: 9.6%;
  right: 61.92%;
  bottom: 58.05%;
  left: 8.05%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameParent35 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  font-size: var(--font-size-13xl);
`;
const FrameParent34 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  text-align: left;
`;
const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DailyVolumeTraded = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  color: var(--color-darkgray-100);
`;
const FrameParent40 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-300);
  backdrop-filter: blur(52.5px);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 1140px;
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-13xl);
`;
const FrameParent39 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  background-image: url("/frame-1000005536@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
`;
const MeetTheVisionariesContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 775px;
`;
const NoComplexityOf1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
  display: none;
`;
const AakashNeerajMittal = styled.b`
  position: absolute;
  top: 39.16px;
  left: 30px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const CeoDensity = styled.div`
  position: absolute;
  top: 123.16px;
  left: 30px;
  font-size: var(--font-size-xl);
  letter-spacing: -1px;
  line-height: 40px;
  color: var(--neutrals-grey-6);
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 93.16px;
  left: 61px;
  width: 363px;
  height: 327px;
  object-fit: cover;
`;
const UillinkedinIcon = styled.img`
  position: absolute;
  top: 304.16px;
  left: 29px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const FrameParent43 = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-8);
  width: 323px;
  height: 360px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Image94Icon = styled.img`
  position: absolute;
  top: 109.16px;
  left: 108px;
  width: 315px;
  height: 315px;
  object-fit: cover;
`;
const Image96Icon = styled.img`
  position: absolute;
  top: 117.16px;
  left: 91px;
  width: 292px;
  height: 266px;
  object-fit: cover;
`;
const FrameParent42 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameParent41 = styled.div`
  align-self: stretch;
  background-color: var(--neutrals-grey-9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
`;
const GetStartedNow = styled.b`
  position: absolute;
  bottom: 1069.58px;
  left: 0px;
  letter-spacing: -2.78px;
  background: linear-gradient(176.64deg, #fff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const GroupChild15 = styled.img`
  position: absolute;
  bottom: -7.65px;
  left: 225.35px;
  width: 557.31px;
  height: 1124.35px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #43d46b;
  filter: blur(51.49px);
  width: 875.97px;
  height: 142.63px;
  opacity: 0.6;
`;
const Cta = styled.div`
  position: absolute;
  bottom: 6.26px;
  left: 4.87px;
  background: linear-gradient(
    268.92deg,
    #d4f938 43.75%,
    rgba(50, 216, 117, 0.96)
  );
  width: 866.23px;
  height: 134.98px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11.13222599029541px 33.39667892456055px;
  box-sizing: border-box;
`;
const RectangleGroup = styled.div`
  position: absolute;
  bottom: 58.44px;
  left: 67px;
  width: 875.97px;
  height: 142.63px;
  font-size: 38.27px;
`;
const GetStartedNowParent = styled.div`
  position: relative;
  width: 1011px;
  height: 1228.58px;
`;
const LandingPageChild = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-141xl) 0px;
  text-align: left;
  font-size: 132.2px;
  color: var(--color-black);
`;
const FooterChild = styled.img`
  position: relative;
  width: 127.31px;
  height: 29.26px;
`;
const Fees1 = styled.div`
  position: absolute;
  top: 0px;
  left: 83.41px;
`;
const Blog = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Leaderboard1 = styled.div`
  position: absolute;
  top: 0px;
  left: 168.16px;
`;
const ContactUs = styled.div`
  position: absolute;
  top: 0px;
  left: 413.05px;
`;
const Careers = styled.div`
  position: absolute;
  top: 0px;
  left: 306.95px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 0px;
  left: 539.17px;
`;
const FeesParent = styled.div`
  position: relative;
  width: 628.17px;
  height: 17px;
`;
const LremIpsumOd = styled.div`
  position: relative;
  line-height: 24px;
  color: #ddd;
  text-align: center;
  display: inline-block;
  width: 786.88px;
`;
const FooterItem = styled.img`
  position: relative;
  width: 189.51px;
  height: 32.03px;
`;
const Footer = styled.div`
  align-self: stretch;
  background-color: #229851;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 63px 245px;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
`;
const LandingPageRoot = styled.div`
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #58f28a, #000);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const LandingPage = () => {
  return (
    <LandingPageRoot>
      <TopNav>
        <FrameIcon alt="" src="/frame.svg" />
        <FrameParent>
          <CareerParent>
            <Career>Career</Career>
            <Career>Blogs</Career>
            <Career>Leaderboard</Career>
            <Career>Fees</Career>
          </CareerParent>
          <TradeNowWrapper>
            <TradeNow>Trade Now</TradeNow>
          </TradeNowWrapper>
        </FrameParent>
      </TopNav>
      <Hero>
        <GroupParent>
          <ItsTimeToTradeTheFutureParent>
            <ItsTimeToContainer>
              <ItsTimeTo>It’s time to trade,</ItsTimeTo>
              <ItsTimeTo>
                <The>{`the `}</The>
                <Future>future.</Future>
              </ItsTimeTo>
            </ItsTimeToContainer>
            <Future1>future.</Future1>
          </ItsTimeToTradeTheFutureParent>
          <DerivatesMadeSimple>Derivates made simple!</DerivatesMadeSimple>
          <TradeBtcEth>
            Trade BTC, ETH Futures with 125x leverage and earn rewards.
          </TradeBtcEth>
        </GroupParent>
        <Iphone14ProSpaceBlackMockParent>
          <Iphone14ProSpaceBlackMock>
            <ShadowIcon alt="" src="/shadow@2x.png" />
            <MainIcon alt="" src="/main@2x.png" />
            <Iphone14ProSpaceBlackMock1
              alt=""
              src="/iphone-14-pro-space-black-mockup-label@2x.png"
            />
          </Iphone14ProSpaceBlackMock>
          <Iphone14ProSpaceBlackMock2>
            <ShadowIcon1 alt="" src="/shadow1@2x.png" />
            <MainIcon1 alt="" src="/main1@2x.png" />
            <Iphone14ProSpaceBlackMock3
              alt=""
              src="/iphone-14-pro-space-black-mockup-label1@2x.png"
            />
          </Iphone14ProSpaceBlackMock2>
          <Iphone14ProSpaceBlackMock4>
            <ShadowIcon2 alt="" src="/shadow2@2x.png" />
            <MainIcon2 alt="" src="/main2@2x.png" />
            <Iphone14ProSpaceBlackMock5
              alt=""
              src="/iphone-14-pro-space-black-mockup-label2@2x.png"
            />
          </Iphone14ProSpaceBlackMock4>
        </Iphone14ProSpaceBlackMockParent>
      </Hero>
      <LandingPageInner>
        <FrameGroup>
          <Parent1>
            <Career1>00%</Career1>
            <ConversionFee>{`Conversion Fee `}</ConversionFee>
          </Parent1>
          <FrameChild alt="" src="/vector-1.svg" />
          <Parent1>
            <Career1>500 Mn+</Career1>
            <ConversionFee>Lifetime Volume Traded</ConversionFee>
          </Parent1>
          <FrameChild alt="" src="/vector-2.svg" />
          <Parent1>
            <Career1>250+</Career1>
            <ConversionFee>Total Tradable Pairs</ConversionFee>
          </Parent1>
          <FrameChild alt="" src="/vector-3.svg" />
          <Parent1>
            <Career1>15,000+</Career1>
            <ConversionFee>Traders</ConversionFee>
          </Parent1>
        </FrameGroup>
      </LandingPageInner>
      <GroupContainer>
        <GroupDiv>
          <GroupChild alt="" src="/group-1000003808.svg" />
          <GroupItem />
          <GroupInner />
          <GroupParent1>
            <GroupIcon alt="" src="/group-18145967.svg" />
            <OneAppEndlessContainer>
              <ItsTimeTo>One App.</ItsTimeTo>
              <ItsTimeTo>{`Endless `}</ItsTimeTo>
              <ItsTimeTo>Possibilities</ItsTimeTo>
            </OneAppEndlessContainer>
          </GroupParent1>
        </GroupDiv>
        <GroupDiv>
          <VectorIcon alt="" src="/vector.svg" />
          <GroupChild alt="" src="/vector1.svg" />
          <GroupItem />
          <GroupInner />
          <GroupParent2>
            <GroupChild2 alt="" src="/group-18145968.svg" />
            <FutureOfDerivativeContainer>
              <ItsTimeTo>{`Future of `}</ItsTimeTo>
              <ItsTimeTo>{`Derivative `}</ItsTimeTo>
              <ItsTimeTo>Trading.</ItsTimeTo>
            </FutureOfDerivativeContainer>
          </GroupParent2>
        </GroupDiv>
        <VectorGroup>
          <VectorIcon2 alt="" src="/vector2.svg" />
          <VectorIcon3 alt="" src="/vector3.svg" />
          <VectorIcon4 alt="" src="/vector4.svg" />
          <GroupChild3 />
          <GroupChild4 />
          <GroupChild5 />
          <GroupChild6 />
          <GroupChild7 />
          <GroupChild8 />
          <GroupChild9 />
          <IsNowHereForYouParent>
            <IsNowHereContainer>
              <ItsTimeTo>{`Is now here, `}</ItsTimeTo>
              <ItsTimeTo>for you.</ItsTimeTo>
            </IsNowHereContainer>
            <GroupChild10 alt="" src="/group-626832.svg" />
          </IsNowHereForYouParent>
        </VectorGroup>
      </GroupContainer>
      <FrameContainer>
        <TradeMorePayLessParent>
          <TradeMorePayContainer>
            <The>{`Trade More. `}</The>
            <PayLess>Pay Less.</PayLess>
          </TradeMorePayContainer>
          <OurLowFees>Our low Fees Supercharge Your Profits</OurLowFees>
        </TradeMorePayLessParent>
        <FrameDiv>
          <FrameParent1>
            <FrameIcon1 alt="" src="/frame1.svg" />
            <Parent11>
              <B3>0.07</B3>
              <TakerFees>Taker Fees</TakerFees>
            </Parent11>
            <Parent2>
              <B3>0.025</B3>
              <TakerFees>Maker Fees</TakerFees>
            </Parent2>
            <Image92Icon alt="" src="/image-92@2x.png" />
          </FrameParent1>
          <FrameParent2>
            <FrameIcon2 alt="" src="/frame2.svg" />
            <Parent3>
              <B3>0.04</B3>
              <TakerFees1>Taker Fees</TakerFees1>
            </Parent3>
            <Parent4>
              <B3>0.02</B3>
              <TakerFees1>Maker Fees</TakerFees1>
            </Parent4>
            <FrameWrapper>
              <FrameIcon3 alt="" src="/frame3.svg" />
            </FrameWrapper>
            <TextureIcon alt="" src="/texture@2x.png" />
          </FrameParent2>
          <FrameParent1>
            <FrameIcon1 alt="" src="/frame4.svg" />
            <Parent11>
              <B3>0.05</B3>
              <TakerFees>Taker Fees</TakerFees>
            </Parent11>
            <Parent2>
              <B3>0.02</B3>
              <TakerFees>Maker Fees</TakerFees>
            </Parent2>
            <Image93Icon alt="" src="/image-93@2x.png" />
          </FrameParent1>
        </FrameDiv>
      </FrameContainer>
      <FrameParent4>
        <ExploreTheMarketsLikeItIsParent>
          <TradeMorePayContainer>
            <ItsTimeTo>Explore the Markets</ItsTimeTo>
            <ItsTimeTo>
              <The>{`like it is your `}</The>
              <PayLess>Playground.</PayLess>
            </ItsTimeTo>
          </TradeMorePayContainer>
          <OurLowFees>
            Search for your favorite coins and stay ahead of the market
          </OurLowFees>
        </ExploreTheMarketsLikeItIsParent>
        <RectangleParent>
          <RectangleIcon alt="" src="/rectangle@2x.png" />
          <ChartIcon alt="" src="/chart.svg" />
          <GroupChild11 alt="" src="/vector-1173.svg" />
          <GroupChild12 alt="" src="/vector-1174.svg" />
          <FrameParent5>
            <FrameParent6>
              <FrameParent7>
                <GroupParent3>
                  <FrameChild1 alt="" src="/group-626505.svg" />
                  <BitcoinParent>
                    <Bitcoin>Bitcoin</Bitcoin>
                    <Btcusdt>BTC/USDT</Btcusdt>
                  </BitcoinParent>
                </GroupParent3>
                <VectorIcon5 alt="" src="/vector5.svg" />
              </FrameParent7>
              <FrameParent8>
                <PriceParent>
                  <Price>Price</Price>
                  <A
                    href="https://coinmarketcap.com/currencies/bitcoin/#markets"
                    target="_blank"
                  >
                    $25,776.80
                  </A>
                </PriceParent>
                <FrameParent9>
                  <VolParent>
                    <Price>VOL</Price>
                    <M>$8.5B</M>
                  </VolParent>
                  <VolParent>
                    <Price>CHG</Price>
                    <Div>23.1%</Div>
                  </VolParent>
                </FrameParent9>
              </FrameParent8>
            </FrameParent6>
            <FrameParent6>
              <FrameParent7>
                <GroupParent3>
                  <FrameChild1 alt="" src="/group-6265051.svg" />
                  <BitcoinParent>
                    <Bitcoin>Solana</Bitcoin>
                    <Btcusdt>SOL/USDT</Btcusdt>
                  </BitcoinParent>
                </GroupParent3>
                <VectorIcon6 alt="" src="/vector6.svg" />
              </FrameParent7>
              <FrameParent8>
                <PriceParent>
                  <Price>Price</Price>
                  <Div1>$18.07</Div1>
                </PriceParent>
                <FrameParent9>
                  <VolParent>
                    <Price>VOL</Price>
                    <M>$372.8M</M>
                  </VolParent>
                  <VolParent>
                    <Price>CHG</Price>
                    <Div>02.1%</Div>
                  </VolParent>
                </FrameParent9>
              </FrameParent8>
            </FrameParent6>
            <FrameParent6>
              <FrameParent7>
                <GroupParent3>
                  <FrameChild1 alt="" src="/group-6265052.svg" />
                  <BitcoinParent>
                    <Bitcoin>Ethereum</Bitcoin>
                    <Btcusdt>ETH/USDT</Btcusdt>
                  </BitcoinParent>
                </GroupParent3>
                <VectorIcon5 alt="" src="/vector7.svg" />
              </FrameParent7>
              <FrameParent8>
                <PriceParent>
                  <Price>Price</Price>
                  <A
                    href="https://coinmarketcap.com/currencies/ethereum/#markets"
                    target="_blank"
                  >
                    $1,607.11
                  </A>
                </PriceParent>
                <FrameParent9>
                  <VolParent>
                    <Price>VOL</Price>
                    <M>$4.6B</M>
                  </VolParent>
                  <VolParent>
                    <Price>CHG</Price>
                    <Div>12.1%</Div>
                  </VolParent>
                </FrameParent9>
              </FrameParent8>
            </FrameParent6>
          </FrameParent5>
          <TextureIcon1 alt="" src="/texture1@2x.png" />
        </RectangleParent>
        <ExploreMarketsWrapper>
          <TradeNow>Explore Markets</TradeNow>
        </ExploreMarketsWrapper>
      </FrameParent4>
      <FrameParent18>
        <UnlockNewFrontiersParent>
          <UnlockNewFrontiersContainer>
            <The>Unlock</The>
            <Span>{` `}</Span>
            <NewFrontiers>New Frontiers.</NewFrontiers>
          </UnlockNewFrontiersContainer>
          <AreYouA>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </AreYouA>
        </UnlockNewFrontiersParent>
        <FrameParent19>
          <SameStrategiesWrapper>
            <Career1>
              <ItsTimeTo>Same</ItsTimeTo>
              <ItsTimeTo>Strategies</ItsTimeTo>
            </Career1>
          </SameStrategiesWrapper>
          <FrameChild4 alt="" src="/vector-11.svg" />
          <SameStrategiesWrapper>
            <Career1>
              <ItsTimeTo>Same</ItsTimeTo>
              <ItsTimeTo>Indicators</ItsTimeTo>
            </Career1>
          </SameStrategiesWrapper>
          <FrameChild4 alt="" src="/vector-21.svg" />
          <SameStrategiesWrapper>
            <Career1>
              <ItsTimeTo>Better</ItsTimeTo>
              <ItsTimeTo>Leverage</ItsTimeTo>
            </Career1>
          </SameStrategiesWrapper>
          <FrameChild4 alt="" src="/vector-31.svg" />
          <SameStrategiesWrapper>
            <Career1>
              <ItsTimeTo>24x7</ItsTimeTo>
              <ItsTimeTo>Trading</ItsTimeTo>
            </Career1>
          </SameStrategiesWrapper>
        </FrameParent19>
        <FrameParent20>
          <FrameParent21>
            <GroupParent6>
              <VectorContainer>
                <GroupChild13 alt="" src="/vector-1176.svg" />
                <GroupParent7>
                  <FrameChild7 alt="" src="/group-1000003828.svg" />
                  <Career>Sell</Career>
                </GroupParent7>
                <GroupParent8>
                  <FrameChild7 alt="" src="/group-10000038281.svg" />
                  <Career>Sell</Career>
                </GroupParent8>
                <GroupParent9>
                  <FrameChild9 alt="" src="/group-10000038282.svg" />
                  <Career>Sell</Career>
                </GroupParent9>
                <GroupParent10>
                  <FrameChild7 alt="" src="/group-1000003829.svg" />
                  <Career>Buy</Career>
                </GroupParent10>
                <GroupParent11>
                  <FrameChild7 alt="" src="/group-10000038291.svg" />
                  <Career>Buy</Career>
                </GroupParent11>
              </VectorContainer>
              <Btcusdt1>BTCUSDT</Btcusdt1>
            </GroupParent6>
            <FrameChild12 alt="" src="/vector-1178.svg" />
            <GroupParent12>
              <VectorParent1>
                <GroupChild14 alt="" src="/vector-1177.svg" />
                <GroupParent13>
                  <FrameChild7 alt="" src="/group-10000038292.svg" />
                  <Career>Buy</Career>
                </GroupParent13>
                <GroupParent14>
                  <FrameChild14 alt="" src="/group-10000038283.svg" />
                  <Career>Sell</Career>
                </GroupParent14>
                <GroupParent15>
                  <FrameChild7 alt="" src="/group-10000038284.svg" />
                  <Career>Sell</Career>
                </GroupParent15>
                <GroupParent16>
                  <FrameChild14 alt="" src="/group-10000038293.svg" />
                  <Career>Buy</Career>
                </GroupParent16>
                <GroupParent17>
                  <FrameChild7 alt="" src="/group-10000038294.svg" />
                  <Career>Buy</Career>
                </GroupParent17>
              </VectorParent1>
              <Nifty>nifty</Nifty>
            </GroupParent12>
          </FrameParent21>
          <TextureIcon2 alt="" src="/texture2@2x.png" />
        </FrameParent20>
      </FrameParent18>
      <FrameParent22>
        <StartSmallEarnBigParent>
          <TradeMorePayContainer>Start Small. Earn Big.</TradeMorePayContainer>
          <DeposityAMinimum>
            Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
            relationship manager
          </DeposityAMinimum>
        </StartSmallEarnBigParent>
        <FrameParent23>
          <AsSomeoneWhosAlwaysLookinParent>
            <Icon alt="" src="/25-2.svg" />
            <DepositBonusParent>
              <DepositBonus>
                <ItsTimeTo>Deposit</ItsTimeTo>
                <ItsTimeTo>Bonus.</ItsTimeTo>
              </DepositBonus>
              <OurAssetsLiquidity>
                Our assets' liquidity is unmatched in the market, with a small
                bid-ask spread and a well-balanced order book.
              </OurAssetsLiquidity>
            </DepositBonusParent>
            <TextureIcon3 alt="" src="/texture3@2x.png" />
            <FrameIcon5 alt="" src="/frame5.svg" />
          </AsSomeoneWhosAlwaysLookinParent>
          <AsSomeoneWhosAlwaysLookinParent>
            <DedicatedRelationshipManagerParent>
              <DedicatedRelationshipManagerContainer>
                <ItsTimeTo>Dedicated</ItsTimeTo>
                <ItsTimeTo>Relationship Manager.</ItsTimeTo>
              </DedicatedRelationshipManagerContainer>
              <OurAssetsLiquidity>
                Our assets' liquidity is unmatched in the market, with a small
                bid-ask spread and a well-balanced order book.
              </OurAssetsLiquidity>
            </DedicatedRelationshipManagerParent>
            <Manager1Icon alt="" src="/manager-1.svg" />
            <TextureIcon4 alt="" src="/texture4@2x.png" />
            <FrameIcon5 alt="" src="/frame6.svg" />
          </AsSomeoneWhosAlwaysLookinParent>
        </FrameParent23>
      </FrameParent22>
      <DerivatesMadeSimpleIn3EasParent>
        <DerivatesMadeSimpleContainer>
          <ItsTimeTo>Derivates made simple</ItsTimeTo>
          <ItsTimeTo>
            <The>{`in `}</The>
            <PayLess>3 Easy</PayLess>
            <NewFrontiers> Steps</NewFrontiers>
          </ItsTimeTo>
        </DerivatesMadeSimpleContainer>
        <FrameParent25>
          <GroupParent18>
            <FrameChild18 alt="" src="/group-626793.svg" />
            <GroupParent19>
              <FrameChild19 alt="" src="/group-1000003801.svg" />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Create an Account</CreateAnAccount>
                  <RegisterComplete>{`Register & Complete your Verification in less than 2 minutes`}</RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent18>
          <FrameChild20 alt="" src="/vector-5.svg" />
          <GroupParent20>
            <FrameChild18 alt="" src="/group-626794.svg" />
            <GroupParent19>
              <FrameChild22 alt="" src="/group-626789.svg" />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Deposit Funds</CreateAnAccount>
                  <RegisterComplete>
                    Add funds quickly using a variety of payment methods
                  </RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent20>
          <FrameChild20 alt="" src="/vector-6.svg" />
          <GroupParent18>
            <FrameChild18 alt="" src="/group-6267941.svg" />
            <GroupParent19>
              <FrameChild25 alt="" src="/group-1000003802.svg" />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Become a Trader</CreateAnAccount>
                  <RegisterComplete>{`Choose Your Trading Pair & Trade Seamlessly`}</RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent18>
        </FrameParent25>
      </DerivatesMadeSimpleIn3EasParent>
      <FrameContainer>
        <BackedByTheBestWrapper>
          <BackedByTheBestWrapper>
            <TradeMorePayContainer>Backed by the Best.</TradeMorePayContainer>
          </BackedByTheBestWrapper>
        </BackedByTheBestWrapper>
        <FrameParent30>
          <Image109Parent>
            <Image109Icon alt="" src="/image-109@2x.png" />
            <Image110Icon alt="" src="/image-110@2x.png" />
            <Image111Icon alt="" src="/image-111@2x.png" />
            <Image112Icon alt="" src="/image-112@2x.png" />
            <Image113Icon alt="" src="/image-113@2x.png" />
            <Image114Icon alt="" src="/image-114@2x.png" />
            <Image115Icon alt="" src="/image-115@2x.png" />
          </Image109Parent>
          <FrameParent31>
            <UtsavsomaniBackgroundRemovedParent>
              <UtsavsomaniBackgroundRemoved
                alt=""
                src="/20200117133556utsavsomani-background-removed-1@2x.png"
              />
              <Career1>
                <AdityaNagarsheth>Utsav Somani</AdityaNagarsheth>
              </Career1>
            </UtsavsomaniBackgroundRemovedParent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved
                alt=""
                src="/pica-background-removed-1@2x.png"
              />
              <Career>
                <AdityaNagarsheth>
                  <AdityaNagarsheth1>Aditya Nagarsheth</AdityaNagarsheth1>
                </AdityaNagarsheth>
                <PerpetualValuePartners>
                  Perpetual Value Partners
                </PerpetualValuePartners>
              </Career>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved
                alt=""
                src="/6ihd3hia-400x400-background-removed-1@2x.png"
              />
              <Career1>
                <AdityaNagarsheth>Gokul Rajaram</AdityaNagarsheth>
              </Career1>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved
                alt=""
                src="/1675483650655-background-removed-1@2x.png"
              />
              <Career>
                <AdityaNagarsheth>
                  <AdityaNagarsheth1>Sajid Rehman</AdityaNagarsheth1>
                </AdityaNagarsheth>
                <PerpetualValuePartners>My Asia VC</PerpetualValuePartners>
              </Career>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved alt="" src="/image-116@2x.png" />
              <Career>
                <AdityaNagarsheth>
                  <AdityaNagarsheth1>Arjun Sethi</AdityaNagarsheth1>
                </AdityaNagarsheth>
                <PerpetualValuePartners>Tribe Capital</PerpetualValuePartners>
              </Career>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved alt="" src="/image-117@2x.png" />
              <Career1>Kunal Shah</Career1>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <UtsavsomaniBackgroundRemoved
                alt=""
                src="/img-20220825-085142-768-background-removed-1@2x.png"
              />
              <Career>
                <AdityaNagarsheth>
                  <AdityaNagarsheth1>Sandeep Nailawal</AdityaNagarsheth1>
                </AdityaNagarsheth>
                <PerpetualValuePartners>Polygon Labs</PerpetualValuePartners>
              </Career>
            </PicABackgroundRemoved1Parent>
            <PicABackgroundRemoved1Parent>
              <ImageBackgroundRemoved1
                alt=""
                src="/image-background-removed-1@2x.png"
              />
              <Career1>Karn Vivek Nagpal</Career1>
            </PicABackgroundRemoved1Parent>
          </FrameParent31>
        </FrameParent30>
      </FrameContainer>
      <FrameParent32>
        <StartSmallEarnBigParent>
          <TradeMorePayContainer>
            Don’t take our word for it.
          </TradeMorePayContainer>
          <DeposityAMinimum>
            Hear it from our expert community of traders who have made insane
            amounts in a short amount of time
          </DeposityAMinimum>
        </StartSmallEarnBigParent>
        <FrameParent33>
          <AsSomeoneWhosAlwaysLookinParent>
            <AsSomeoneWhos>
              As someone who's always looking for the next big thing, I was
              really excited to try out Density’s crypto futures trading
              platform. And I have to say, it definitely lived up to my
              expectations.
            </AsSomeoneWhos>
            <PrakashJamatia>
              <ItsTimeTo>Prakash</ItsTimeTo>
              <ItsTimeTo>Jamatia.</ItsTimeTo>
            </PrakashJamatia>
            <FounderTradeshala>Founder, Tradeshala</FounderTradeshala>
            <TextureIcon5 alt="" src="/texture5@2x.png" />
            <FrameIcon7 alt="" src="/frame7.svg" />
            <Unsplashieebwgy6laIcon alt="" src="/unsplashieebwgy-6la@2x.png" />
            <FrameChild26 alt="" src="/group-1000003818.svg" />
          </AsSomeoneWhosAlwaysLookinParent>
          <AsSomeoneWhosAlwaysLookinParent>
            <AsSomeoneWhos>
              I'm not a seasoned trader, but this website has made it easy for
              me to get started with crypto futures trading. Their KYC was very
              fast and the educational resources were really helpful.
            </AsSomeoneWhos>
            <PrakashJamatia>
              <ItsTimeTo>Shambhavi</ItsTimeTo>
              <ItsTimeTo>Nayak.</ItsTimeTo>
            </PrakashJamatia>
            <FounderTradeshala>Commodity Trader</FounderTradeshala>
            <TextureIcon5 alt="" src="/texture6@2x.png" />
            <FrameIcon7 alt="" src="/frame8.svg" />
            <Unsplasho5nbw8gtnmcIcon alt="" src="/unsplasho5nbw8gtnmc@2x.png" />
            <FrameChild26 alt="" src="/group-10000038181.svg" />
          </AsSomeoneWhosAlwaysLookinParent>
          <AsSomeoneWhosAlwaysLookinParent>
            <AsSomeoneWhos>
              I've been using this platform for a few months now and it's been a
              great experience. I was delighted to see all the major crypto
              coins listed on Density Exchange.
            </AsSomeoneWhos>
            <PrakashJamatia>
              <ItsTimeTo>Arjun</ItsTimeTo>
              <ItsTimeTo>Naik.</ItsTimeTo>
            </PrakashJamatia>
            <FounderTradeshala>Equity Trader</FounderTradeshala>
            <TextureIcon5 alt="" src="/texture7@2x.png" />
            <FrameIcon7 alt="" src="/frame9.svg" />
            <FrameChild26 alt="" src="/group-10000038182.svg" />
            <Unsplashzhvm3xiohoeIcon alt="" src="/unsplashzhvm3xiohoe@2x.png" />
          </AsSomeoneWhosAlwaysLookinParent>
        </FrameParent33>
      </FrameParent32>
      <FrameParent34>
        <GroupParent24>
          <FrameChild29 alt="" src="/group-1000003819.svg" />
          <EarnMoneyTheEasyWayParent>
            <TradeMorePayContainer>
              <The>{`Earn Money. `}</The>
              <PayLess>The Easy Way.</PayLess>
            </TradeMorePayContainer>
            <NoComplexityOf>
              No Complexity of Trading Fee, generate volume and win
            </NoComplexityOf>
          </EarnMoneyTheEasyWayParent>
        </GroupParent24>
        <FrameParent35>
          <FrameParent36>
            <FrameIcon10 alt="" src="/frame10.svg" />
            <ShareYourYour>Share your your referral link</ShareYourYour>
            <FrameChild30 alt="" src="/group-626834.svg" />
            <TextureIcon8 alt="" src="/texture8@2x.png" />
          </FrameParent36>
          <FrameParent36>
            <FrameIcon10 alt="" src="/frame11.svg" />
            <InviteFriendsTo>
              Invite Friends to Trade on Density
            </InviteFriendsTo>
            <FrameChild31 alt="" src="/group-1000003822.svg" />
            <TextureIcon8 alt="" src="/texture9@2x.png" />
          </FrameParent36>
          <FrameParent36>
            <FrameIcon10 alt="" src="/frame12.svg" />
            <ShareYourYour>
              <ItsTimeTo>{`Trade `}</ItsTimeTo>
              <ItsTimeTo>and Earn</ItsTimeTo>
            </ShareYourYour>
            <FrameChild32 alt="" src="/group-181459681.svg" />
            <TextureIcon8 alt="" src="/texture10@2x.png" />
          </FrameParent36>
        </FrameParent35>
        <ExploreMarketsWrapper>
          <TradeNow>start earning now</TradeNow>
        </ExploreMarketsWrapper>
      </FrameParent34>
      <FrameParent39>
        <FrameWrapper2>
          <EarnMoneyTheEasyWayParent>
            <TradeMorePayContainer>
              <The>{`Trade Together. `}</The>
              <PayLess>Thrive Together.</PayLess>
            </TradeMorePayContainer>
            <NoComplexityOf>
              Join the fun-filled community on our platform.
            </NoComplexityOf>
          </EarnMoneyTheEasyWayParent>
        </FrameWrapper2>
        <FrameParent40>
          <Parent1>
            <Career1>10,000+</Career1>
            <DailyVolumeTraded>Traders</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src="/vector-12.svg" />
          <Parent1>
            <Career1>100Mn</Career1>
            <DailyVolumeTraded>Daily Volume Traded</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src="/vector-22.svg" />
          <Parent1>
            <Career1>Daily</Career1>
            <DailyVolumeTraded>Trade Analysis</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src="/vector-32.svg" />
          <Parent1>
            <Career1>Live</Career1>
            <DailyVolumeTraded>Signals</DailyVolumeTraded>
          </Parent1>
        </FrameParent40>
        <ExploreMarketsWrapper>
          <TradeNow>Join community</TradeNow>
        </ExploreMarketsWrapper>
      </FrameParent39>
      <FrameParent41>
        <BackedByTheBestWrapper>
          <EarnMoneyTheEasyWayParent>
            <MeetTheVisionariesContainer>
              <The>{`Meet the `}</The>
              <PayLess>Visionaries</PayLess>
              <The> behind Density.</The>
            </MeetTheVisionariesContainer>
            <NoComplexityOf1>
              No Complexity of Trading Fee, generate volume and win
            </NoComplexityOf1>
          </EarnMoneyTheEasyWayParent>
        </BackedByTheBestWrapper>
        <FrameParent42>
          <FrameParent43>
            <FrameIcon10 alt="" src="/frame13.svg" />
            <AakashNeerajMittal>Aakash Neeraj Mittal</AakashNeerajMittal>
            <CeoDensity>CEO, Density</CeoDensity>
            <TextureIcon8 alt="" src="/texture11@2x.png" />
            <Image95Icon alt="" src="/image-95@2x.png" />
            <UillinkedinIcon alt="" src="/uillinkedin.svg" />
          </FrameParent43>
          <FrameParent43>
            <FrameIcon10 alt="" src="/frame14.svg" />
            <AakashNeerajMittal>
              <ItsTimeTo>{`Bhupendra `}</ItsTimeTo>
              <ItsTimeTo>Bule</ItsTimeTo>
            </AakashNeerajMittal>
            <CeoDensity>CTO, Density</CeoDensity>
            <TextureIcon8 alt="" src="/texture12@2x.png" />
            <Image94Icon alt="" src="/image-94@2x.png" />
            <UillinkedinIcon alt="" src="/uillinkedin1.svg" />
          </FrameParent43>
          <FrameParent43>
            <FrameIcon10 alt="" src="/frame15.svg" />
            <AakashNeerajMittal>
              <ItsTimeTo>Deepak</ItsTimeTo>
              <ItsTimeTo>Vasman</ItsTimeTo>
            </AakashNeerajMittal>
            <CeoDensity>CBO, Density</CeoDensity>
            <TextureIcon8 alt="" src="/texture13@2x.png" />
            <Image96Icon alt="" src="/image-96@2x.png" />
            <UillinkedinIcon alt="" src="/uillinkedin2.svg" />
          </FrameParent43>
        </FrameParent42>
      </FrameParent41>
      <LandingPageChild>
        <GetStartedNowParent>
          <GetStartedNow>Get started now.</GetStartedNow>
          <GroupChild15 alt="" src="/group-1000003804.svg" />
          <RectangleGroup>
            <RectangleDiv />
            <Cta>
              <Career1>Start Trading!</Career1>
            </Cta>
          </RectangleGroup>
        </GetStartedNowParent>
      </LandingPageChild>
      <Footer>
        <FooterChild alt="" src="/group-626657.svg" />
        <UnlockNewFrontiersParent>
          <FeesParent>
            <Fees1>Fees</Fees1>
            <Blog>Blog</Blog>
            <Leaderboard1>Leaderboard</Leaderboard1>
            <ContactUs>Contact Us</ContactUs>
            <Careers>Careers</Careers>
            <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
          </FeesParent>
          <LremIpsumOd>{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</LremIpsumOd>
        </UnlockNewFrontiersParent>
        <FooterItem alt="" src="/group-2007.svg" />
      </Footer>
    </LandingPageRoot>
  );
};

export default LandingPage;
