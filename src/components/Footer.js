import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='black' border='white' >
      <MDBContainer className='p-4'>
            {/* <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='github' />
            </MDBBtn>
            </section> */}

            <section className=''>
            <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                    <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>THE BASICS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                About Movies
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Support Forums
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   System Status
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>GET INVOLVED</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Contribution
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Add New Movie
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Add New Show
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>COMMUNITY</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Guidelines
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Discussions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Leaderboard
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Twitter
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>LEGAL</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  API Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   DMCA Takedown Request
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        @ 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          React Technology
        </a>
      </div>
    </MDBFooter>
  );
}