import React from 'react'

export const PeralatanMasak = () => {
  return (
    <>
    {/* Peralatan Masak */}
    <div className="my-5 grid grid-cols-6 gap-2">
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm1.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan / frypan maxim</p>
          <p className=" font-bold px-2">RP.60.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Semarang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.9 | 260+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm2.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Estetik</p>
          <p className=" font-bold px-2">RP.175.000</p>
          <p className="text-sm px-2 line-through">
            RP.200.000 <span className="absolute px-1 text-red-600">12,5%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm3.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gotto - panci listrik</p>
          <p className=" font-bold px-2">RP.49.900</p>
          <p className="text-sm px-2 line-through">
            RP.166.300<span className="absolute px-1 text-red-600">70%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.8 |2rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm4.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Batu</p>
          <p className=" font-bold px-2">RP.29.281</p>
          <p className="text-sm px-2 line-through">
            RP.32.000 <span className="absolute px-1 text-red-600">11%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Surabaya
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 1rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm5.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Goto - hopo Electric</p>
          <p className=" font-bold px-2">RP.89.900</p>
          <p className="text-sm px-2 line-through">
            RP.300.000 <span className="absolute px-1 text-red-600">70%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Cikampek
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm6.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Moegen - New Grill BBQ</p>
          <p className=" font-bold px-2">RP.198.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Bandung
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm7.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Carbon Steel Wok 32</p>
          <p className=" font-bold px-2">RP.249.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm8.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Rinnai - kompor gas</p>
          <p className=" font-bold px-2">RP.323.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm9.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kris Termos Vacum</p>
          <p className=" font-bold px-2">RP.79.920</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Sukabumi
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm10.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Meat Press - alat Press</p>
          <p className=" font-bold px-2">RP.147.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm11.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kantung Saringan</p>
          <p className=" font-bold px-2">RP.4.338</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kota Depok
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 2rb+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm12.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Skitchen - Aurora Dutch Oven 24cm</p>
          <p className=" font-bold px-2">RP.995.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm13.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wadah Saringan</p>
          <p className=" font-bold px-2">RP.21.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm14.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Teko Listrik</p>
          <p className=" font-bold px-2">RP.249.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Barat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm15.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">GM Bear Panci Listrik (2in1)</p>
          <p className=" font-bold px-2">RP.83.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm16.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gas Portable Tokai 235gr</p>
          <p className=" font-bold px-2">RP.15.298</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Utara
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm17.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Rinnai - Kompor Gas</p>
          <p className=" font-bold px-2">RP.192.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm18.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan Baja</p>
          <p className=" font-bold px-2">RP.221.340</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm19.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Tutup Panci Kaca</p>
          <p className=" font-bold px-2">RP.39.600</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Timur
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 60+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm20.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Gm Bear Panci Listrik</p>
          <p className=" font-bold px-2">RP.83.900</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Tangerang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.0 | 102+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm21.png"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Wajan Baja</p>
          <p className=" font-bold px-2">RP.221.340</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Pusat
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 300+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm22.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Stockholm Skillet by Skitchen</p>
          <p className=" font-bold px-2">RP.299.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Jakarta Selatan
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.5 | 600+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm23.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Cobek Estetik</p>
          <p className=" font-bold px-2">RP.175.000</p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Cikampek
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 205+ terjual
          </p>
        </div>
        <div className="h-80 w-44 items-center rounded-lg shadow-md flex-wrap">
          <img
            src="src/img/peralatanMasak/pm24.jpg"
            alt={1}
            className="rounded-lg"
          />
          <p className="text-base px-2">Kris Termos Vakum</p>
          <p className=" font-bold px-2">RP.79.920</p>
          <p className="text-sm px-2 line-through">
            RP.99.000 <span className="absolute px-1 text-red-600">20%</span>
          </p>
          <p className="flex text-slate-400 m-2">
            <img src="src/img/logo/centangBiru.png" alt="#" width={25} />
            Kab. Karawang
          </p>
          <p className="flex m-1 text-base  text-slate-400">
            {/*?xml version="1.0" encoding="utf-8"?*/}
            <svg
              className="m-1"
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 26.9 25.65"
              style={{ enableBackground: "new 0 0 26.9 25.65" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: ".st0{clip-path:url(#SVGID_2_);} .st1{fill:#FFD401;}"
                }}
              />
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_1_"
                      d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                    />
                  </defs>
                  <clipPath id="SVGID_2_">
                    <use
                      xlinkHref="#SVGID_1_"
                      style={{ overflow: "visible" }}
                    />
                  </clipPath>
                  <g className="st0">
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="-0.08"
                        y="-0.1"
                        width="27.01"
                        height="25.85"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <g style={{ clipPath: "url(#SVGID_4_)" }}>
                      <image
                        style={{ overflow: "visible" }}
                        width={64}
                        height={57}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
                        transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st1"
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
                />
              </g>
            </svg>
            4.7 | 102+ terjual
          </p>
        </div>
      </div>
      {/* Peralatan Masak */}
    </>
  )
}

