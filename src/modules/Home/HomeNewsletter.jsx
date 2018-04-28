// @flow
import * as React from 'react'
import Button from '../../components/Button'

type Props = {
  enroll: string,
  homeEmailPlaceHolder: string,
  homeEmailTitle: string,
}

const HomeNewsletter = ({
  enroll,
  homeEmailPlaceHolder,
  homeEmailTitle,
}: Props) => (
  <section className="pv5 min-h-512 flex flex-column justify-center items-center">
    <div className="ph4 tc mdc-theme--primary">
      <h2>{homeEmailTitle}</h2>
    </div>
    <div className="flex justify-around items-center ">
      <input
        type="text"
        className="mh2 ph4 pv2 br-pill ba bw1 b--light-gray raised"
        placeholder={homeEmailPlaceHolder}
      />
      {/* <label className="mdc-floating-label" htmlFor="newsletter-field">
          {homeEmailPlaceHolder}
        </label> */}
      <Button className="mh2 ph4" raised>
        {enroll}
      </Button>
    </div>
  </section>
)
export default HomeNewsletter
