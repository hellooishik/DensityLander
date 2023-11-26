import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
function TradingComponent(props) {
    return (
      <>
        <div className="main-container">
          <div className="title">
            <span className="red-text">
              It’s time to trade, <br /> the future.
            </span>
          </div>
          <div className="description">
            Trade BTC, ETH Futures with 125x leverage and earn rewards.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5d832-bda4-47cc-a5cc-82e01418722c?apiKey=3c46c17ca0b44d2fbe01abd8f47d7f7e&"className="image-wrapper"
          />
        </div>
        <style jsx>{`
          .main-container {
            justify-content: center;
            align-self: stretch;
            display: flex;
            flex-direction: column;
            background-color: #1e1e1e;
            width: auto;
          }
          .title {
            color: var(--White, #fff);
            text-align: center;
            letter-spacing: -4.190476417541504px;
            background: linear-gradient(
              97deg,
              #78e65d 47.68%,
              #d5fa39 70.85%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            max-width: 693px;
            align-self: center;
            margin-top: 12px;
            font: 700 96px/100px Neurial Grotesk, -apple-system, Roboto,
              Helvetica, sans-serif;
          }
          @media (max-width: 991px) {
            .title {
              max-width: 100%;
              font-size: 40px;
              line-height: 47px;
            }
          }
          .description {
            color: var(--neutrals-grey-4, #e7e7ea);
            text-align: center;
            text-transform: capitalize;
            align-self: center;
            margin-top: 53px;
            white-space: nowrap;
            font: 400 24px/29px Neurial Grotesk, -apple-system, Roboto,
              Helvetica, sans-serif;
          }
          @media (max-width: 991px) {
            .description {
              max-width: 100%;
              margin-top: 40px;
              white-space: initial;
            }
          }
          .image-wrapper {
            aspect-ratio: 1.17;
            object-fit: contain;
            object-position: center;
            width: 100%;
            overflow: hidden;
            margin-top: 76px;
            background-color: #1c1b20;
          }
          @media (max-width: 991px) {
            .image-wrapper {
              max-width: 100%;
              margin-top: 40px;
            }
          }
        `}</style>
      </>
    );
  }
  export default TradingComponent;