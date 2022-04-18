import React from 'react'

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider'

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/userSlice";

function Header() {
  const dispatch = useDispatch()
  const address = useSelector((state) => state.user.address)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          },
        },
      },
    });
    return web3Modal
  }

  async function connect() {
    try {
      const web3Modal = await getWeb3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const accounts = await provider.listAccounts()
      dispatch(login(accounts[0]))
    } catch (err) {
      console.log('error', err)
    }
    
  }

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
            Logo
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {!isLoggedIn && (
            <div className="text-end">
              {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
              <button
                type="button"
                className="btn btn-warning"
                onClick={connect}
              >
                Connect
              </button>
            </div>
          )}

          {isLoggedIn && (
            <>
              <p class="h5 m-2">{`Hi, ${address}`}</p>
              <div className="text-end">
                {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header