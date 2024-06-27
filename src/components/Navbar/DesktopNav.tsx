import Link from "next/link";
import { Fragment } from "react";
import { CiLock } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function DesktopNav() {
  return (
    <Fragment>
      <section className="hidden xl:block">
        <div className=" bg-gray">
          <div className=" container py-3 flex justify-between text-primary-hover">
            <div className="text-primary flex items-center text-sm gap-x-3">
              <BsFillTelephoneFill />
              <span className="block">800-382-5465</span>
            </div>
            <div className="text-sm flex gap-x-4">
              <Link href="#">ABOUT US</Link>
              <Link href="#">LOCATIONS</Link>
            </div>
          </div>
        </div>
        <div className=" bg-white">
          <div className="grid grid-cols-6 py-4 items-center container">
            <ul className="col-span-2 flex justify-between gap-x-8 items-center text-primary-hover">
              <li>
                <Link href="#" className="leading-[1.125rem] block">
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="leading-[1.125rem] block">
                  Small Business
                </Link>
              </li>
              <li>
                <Link href="" className="leading-[1.125rem] block">
                  Commercial & Speciality
                </Link>
              </li>
              <li>
                <Link href="#" className="leading-[1.125rem] block">
                  Wealth Management
                </Link>
              </li>
            </ul>
            <Link href="/" className="font-bold block col-span-3 ml-36">
              <svg xmlns="http://www.w3.org/2000/svg" width="229.272" height="23.608" viewBox="0 0 229.272 23.608">
                <g id="Group_523" data-name="Group 523">
                  <path
                    id="Path_245"
                    data-name="Path 245"
                    d="M0 0v20.24l3.174 3.37h20.433V0z"
                    transform="translate(0 -.002)"
                    fill="#fff"
                  />
                  <path
                    id="Path_246"
                    data-name="Path 246"
                    d="M42.76 15.855V0H27.382A25.078 25.078 0 0 1 42.76 15.855"
                    transform="translate(-19.15)"
                    fill="#f93822"
                  />
                  <path
                    id="Path_247"
                    data-name="Path 247"
                    d="M21.912 26.984H2.162A2.162 2.162 0 0 1 0 24.822V4.827A21.95 21.95 0 0 1 13.377 9.47l-4.6 5.584-5.934.146 3.247 3.624-4.247 6.44 7.37-3.343 4.4 3.344V19.53l5.332-3.678a21.925 21.925 0 0 1 2.964 11.035zm-8.3-17.323v5.394l4.918.118a22.236 22.236 0 0 0-4.918-5.51"
                    transform="translate(0 -3.376)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_248"
                    data-name="Path 248"
                    d="M253.313 20.748c0 3.208-2.7 5.538-6.425 5.538a9.658 9.658 0 0 1-5.222-1.347 8.19 8.19 0 0 1-1.166-.867l2.435-3.325a5.582 5.582 0 0 0 4.528 1.6.045.045 0 0 0 .02 0c.046-.006.09-.012.133-.02a.723.723 0 0 0 .09-.02 1.4 1.4 0 0 0 1.29-1.38c0-1-.974-1.235-3.11-1.752a.107.107 0 0 1-.03-.006l-.22-.054c-.118-.027-.236-.054-.356-.084-.3-.072-.61-.153-.91-.24-2.124-.635-4.045-1.784-4.045-4.622 0-3.01 2.6-5.2 6.175-5.2a8.343 8.343 0 0 1 4.314 1.02 7.984 7.984 0 0 1 .694.447c.154.11.3.226.444.35l.277.224-2.253 3.074-.294-.235a4.895 4.895 0 0 0-3.273-1.2c-1.3 0-1.88.69-1.88 1.376 0 .77.9 1.046 2.313 1.38.13.03.265.06.4.093q.275.067.577.134.257.06.523.126l.033.01c2.567.633 4.934 1.68 4.934 4.97"
                    transform="translate(-168.073 -6.277)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_249"
                    data-name="Path 249"
                    d="M103.27 27.282h4.16v-6.257h6.262V17.16h-6.26V14.4h7.462v-3.928H103.27z"
                    transform="translate(-72.223 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Rectangle_436"
                    data-name="Rectangle 436"
                    transform="translate(46.726 3.148)"
                    fill="#0050b5"
                    d="M0 0h4.205v16.81H0z"
                  />
                  <path
                    id="Path_250"
                    data-name="Path 250"
                    d="M288.507 14.336h4.5v12.946h4.07V14.336h4.458v-3.864h-13.028z"
                    transform="translate(-201.77 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_251"
                    data-name="Path 251"
                    d="M366.087 16.774h-5.237v-6.3h-4.182v16.808h4.182v-6.394h5.237v6.393h4.183V10.47h-4.183z"
                    transform="translate(-249.438 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_252"
                    data-name="Path 252"
                    d="M422.847 9.715a8.66 8.66 0 0 0-6.09 14.744 8.61 8.61 0 0 0 14.7-6.112 8.632 8.632 0 0 0-8.61-8.633m4.43 8.633a4.406 4.406 0 1 1-8.81 0 4.407 4.407 0 1 1 8.81 0"
                    transform="translate(-289.716 -6.794)"
                    fill="#0050b5"
                  />
                  <path
                    id="Rectangle_437"
                    data-name="Rectangle 437"
                    transform="translate(163.18 3.148)"
                    fill="#0050b5"
                    d="M0 0h4.205v16.81H0z"
                  />
                  <path
                    id="Path_253"
                    data-name="Path 253"
                    d="M583.56 14.154V10.47h-11.94v3.842h6.98l-7.188 9.888-.02.026v3.052h12.26V23.4h-6.812z"
                    transform="translate(-399.608 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_254"
                    data-name="Path 254"
                    d="M629.782 9.715a8.66 8.66 0 0 0-6.09 14.744 8.61 8.61 0 0 0 14.7-6.112 8.63 8.63 0 0 0-8.61-8.633m4.428 8.633a4.406 4.406 0 1 1-8.81 0 4.407 4.407 0 1 1 8.81 0"
                    transform="translate(-434.438 -6.794)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_255"
                    data-name="Path 255"
                    d="M701.076 10.472v9.718L695 10.518l-.03-.047h-4.3v16.81h4V17.088l6.344 10.148.03.047h4v-16.81z"
                    transform="translate(-483.032 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_256"
                    data-name="Path 256"
                    d="M195.2 19.7a4.55 4.55 0 0 0 2.974-4.245c0-3.094-2.446-4.988-6.955-4.988h-6.284V27.26h4.557v-6.045h1.655l3.237 6.043h5.084zm-4.772-1.655h-.935v-4.17h.935c1.487 0 2.95.36 2.95 1.92 0 1.8-1.463 2.254-2.95 2.254"
                    transform="translate(-129.335 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_257"
                    data-name="Path 257"
                    d="M494.036 19.7a4.55 4.55 0 0 0 2.974-4.245c0-3.094-2.446-4.988-6.954-4.988h-6.283V27.26h4.557v-6.045h1.655l3.237 6.043h5.078zm-4.772-1.655h-.935v-4.17h.934c1.487 0 2.95.36 2.95 1.92 0 1.8-1.463 2.254-2.95 2.254"
                    transform="translate(-338.33 -7.323)"
                    fill="#0050b5"
                  />
                  <path
                    id="Path_258"
                    data-name="Path 258"
                    d="M753.458 55.445a1.968 1.968 0 1 1-1.96-1.914 1.924 1.924 0 0 1 1.96 1.915m-3.444 0a1.483 1.483 0 0 0 1.494 1.53 1.466 1.466 0 0 0 1.46-1.52 1.478 1.478 0 1 0-2.954-.01m1.18 1h-.444v-1.91a3.86 3.86 0 0 1 .736-.06 1.192 1.192 0 0 1 .665.14.53.53 0 0 1 .188.42.49.49 0 0 1-.4.445v.02a.564.564 0 0 1 .35.467 1.463 1.463 0 0 0 .14.48h-.48a1.636 1.636 0 0 1-.15-.468c-.036-.21-.153-.3-.4-.3h-.21zm.01-1.087h.21c.246 0 .445-.082.445-.28 0-.176-.13-.292-.41-.292a1.037 1.037 0 0 0-.245.024z"
                    transform="translate(-524.185 -37.437)"
                    fill="#0050b5"
                  />
                  <path id="Rectangle_438" data-name="Rectangle 438" fill="none" d="M0 0h229.273v23.608H0z" />
                </g>
              </svg>
            </Link>
            <Link href="#" className="flex justify-center text-white items-center bg-primary py-3 w-[150px] ml-auto">
              <span className="mr-1">
                <CiLock />
              </span>
              Log In
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
