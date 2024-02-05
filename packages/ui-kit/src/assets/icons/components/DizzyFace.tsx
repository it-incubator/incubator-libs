import { IconWrapper, IconProps } from "../IconWrapper";

const DizzyFace = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <path
            fill="url(#prefix__c2906bb0-bea5-11ee-bdfe-0d316f90c6b9)"
            d="M0 0h72v72H0z"
          />
          <defs>
            <pattern
              id="prefix__c2906bb0-bea5-11ee-bdfe-0d316f90c6b9"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#prefix__image0_3027_308"
                transform="scale(.01389)"
              />
            </pattern>
            <image
              id="prefix__image0_3027_308"
              width={72}
              height={72}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC/VBMVEUAAADglybJfSfGeSDIfivJdxzJaQT8lwbKagTNeh78kgTBaxLCaArBaxD2qxz7nQ3rhg/FagznkCHEaAjRcg3xmhzFaAjFaAvXehb3igXGaAbFbA/mixzMdRjRcATvhATHaQb0lhPRcAvuiQ7AZwr0oyHGaw3Xdg7ukhrrjxvSdRPmfQfIaQfnfgnlfgvjewX6qBj4oBXyhwj2kw32oRq+Zgm+ZgmmZwfYfgb/2DP+tBv/0jX/zzX/yzX9rxf/wjf/vTH/0jBzPAT+sRjlkg3hiwr/5jb8rRb/+Hv/1TP/92//4zH/uyz/tyKDSQT//dT/yDj/xDbnlg93QAf//L3/zTLxoRPdhwnVeQTMbQP/+IH/wDT5qRacXwjTdQT//uH/xzP/2zH/yCv/uCf/th6QVgiHTgf//MP7qxXsmxF/RQX/+7b/92j/xC/ijwz//cn/3zD1phTzoxP4qRH/rAmgYgf/wC7qmA+LVQtwOAP/+p7/+or/7kL/yi//vijtnRGPXA///M7/+o//9mD/uwzaggj/pAeMUQb//trvnxD1nArdhAeXWgbhfQPQcQP/8XX/8Fb/1jD/zSr/uin/uSWUWAb/+rD/+Hb/10n+6Eb84jv3phb/+IX95lb/8kn/6zz/3Tj/wSn1pQ1sNQP/+6j/+Zb/8Gb/52X/9Vn+9lH/30r/0UD/2T3StTD/wBj/4GD/71//3lP/7U7+6DvZvDL/xCr/xQ7tjgX//aL/yj/fsSHgpB//2Rn/0BV/TQ7/tAr675z/8G3/2Fb+2S2/hBiiaA3vmgrmjgj/mwXyigP+4G3ZwWzApmn/0E6kejPpqyeNXR6tdBaVXwxoMQH//uj+96j/74z64XvNtTrhvDHPqizDnyfNkB3pkwrx54397YDn032zlFTgxDeXayqyiij/yx3kiQVgKgH92WTSuWLLrFP01TnDqTPNoSfbnCP1sCG/lSDWpxzy2U7VvTrnzXHlwmH6xTDwti33xSv/3SLbohu4exaSYhX+pg/izDoTmrKYAAAAN3RSTlMAAggYETDy/foj/lafYvzxnopPxqSYu6tX8dt1XUv39uW6tKupqJeViHNn3tLHuu/k2NPSw7KxbJOciQAAChhJREFUWMO8kmtMUmEYx8N0Tj6ksdhq2Vq11m3d+5KVxXHrZlEb9sV0FQo5yukWObBgUA6bq2FkKE5EZ3lBRW5WWALiKkBhTAJMNy+Z87LcyupDrbae93Ako/tl/fhwOP/3Ob/zvM975vwjIub8P0ikiAgS6e8UkVGUNaupKwHq6jWUqEjSH1liKNRtm+YlZGpwMhPmbdpGjY/53VlEUqib05I0mtH2BwTtoxpNUtpmKiXydzTxy2ITC+60P3iXrNBKUysqUqW1+r3vHrTfKUiMXRY/91dPkrIslguad4pBX86VE0+CXBHL/cpcUFlil1F+aYMxVFxTJZUfORHGkRS/GlTc2Lion8+YslViAY0/5QhwBQg64M8RRM5tUFkkW+N/0lTkmljwdErP5OTkiMViwkVYxOIcIMXfhJpa/cOhz42Lhm2p81NSUk6fPh10EYiRBkJYkteNFnCj4+b+wLMCPKN18jMIwgUy3EFY8CX5oAxMK2J+7Bn0+axDb7omuoasSBYCJNYhiN8MWH0+/w5k+k5PkWhfskHr0KTbw8Awhtk9JIfGcFArvi63GcWe5xMBq78R7e6bcyKtIUsso4HApIfvreED3rERqxzANwMMeMa8ENfUeBkjkwH/TouEvPpbZ7dwkcSiGX/r5nsxs8c93N3dPdztuzULazceuj0cvpfx/E2AaZEsiv/Gd7jFzi2wvfXA64aHBvLz7yHyZ0NE1oGuYQ/mHXnr1HDtW6LCPRFxsLHG8ZEad9fApUsXEJeA25+Bu9DCwAQUBmwFEvJXY1qyyM6tdjonuwZT9wOpQAVACHEBuocYX68YnJgMOI9y7YsWhp3YBmjI5XRKpR0dUqm0tHQ/oQsag1c8Ky0thQJU5HSOZ0rI6+eGTdrOzRtvaamrq6vt6Og4iChF7A+B7iAFoKAWCltaxk1cu2NteENJLputBalqgbM4B8PAw1oEaACb63BYS0uWRkuEINLplErdtFKr1V5GaKe1Z0Mop7V4BiinlVCns9lcu7n2pbOmRFrlsHN3u1xlOp2ubOqDUVlcXFxfX19sFPUrLxMon4ueFUMGKKc+NKtRaZnLlGR3xEWERDHryJIEk6msrEyt7mOM8Z7q9VCvN5rHsL76IMX9NWOiZ3pI9ajE/FSthnKTKUNCXhf1edRLyZKMo6bGRjD1MjC+6KlCr1cYeXyM0dtA8ILIwWPmY+bX4GlsNB3d8zF66dpZO4v+eGg3MjU1KXrZHAyeAA/G4fU2VBI0vAjm5X1mBkf0WtHUhDy792RFOxaQQmfmKMo6dPzkrp07cBMPPdHGw+is3oaLM4CpkI6J2qbMDHoPeEC0c9fJ43v2FTlC5xa1DkQ38rKR6UBTlaIZTD0iBngqL6oIj0p1sfIFj87gsXFP1fYDO8CTnXcoscixMWrm8DfeLcrKEOZlC46BaXuVoZnFptPZouZKlcGgUhngp0IXMLHpbHaP0YB7jgmys4UZiUV3r818AGuvgeiwsLqVKThGox3Yfqr8JevqVVa/au+XGAwovzlVfmr7dRrtmECQXS08vA9EiwnRfBClJZQIq5lMgYxGu05rO89KT2c9bMtNTk4OaZKTT71Kv4nnNPDIBExmq7AkMwtEq0jEoYHoXBLeElMmo8ne8ziFDx8WclhgmkXnK4jS0ws5N9ugSAaeamFJQhqIFhCiBUiUmFmCTFDwno3Re4zPeugYr60zpMntfIXmbOxj0THWfRnUtbYKhYeTzoFoecSM6PGjGRET94iMe/caRRxkyiXAPaJmQ3l/ITIxgw1lJoaLPnViPyFpxnEYwKemONRAgoLGokPsMHbdZi6dm7oXwSIVX19JxeEfVEiWYtbBeRIRRQjzkhfnrvO0o8fZOoo7bnoZw0usOlUQjD2/n6+pSSz2nOQ1Pz3fr6++L9YYHmpk4dQP9r7w0tuBs0aPf3lLpZ3GAKp9PRqBel9rIfV+6f2HzdTZbiRQr+7t7S2/qQdsu2fv3vbzazeyU/+8jOMHP4I222+892RFzCj0iOt1a9h2aRun0vGvnXr1Fd47vKK+8+uAd94dt3e+H8DB+VE9C/54kdrc3i6tquO1rz3V4DOi9PS6OSzJtw3Jfvzzk90OyQTpz0F1eZk4y8vV459wTK9Ijn/CoRBW1O1xj3josSffxZLU+2ZAXvuK3Y4znFAmMMNUTSY4L+jTKS8cMyaL57p5z+CEfLiAbdPZdNubm15vikqICeEVEwkOUSfl9QLSlVb1IawovyDjIfGiqpdk44zaZ9ZtAPJqAK0MKPv55WXq1YBZAaQhzoYOhbRxNnmkkoh5aGqGc3RztZB+1Wfe2LBYIGk0fWnlstE8/OZud1op3tFo4FgsGxtm36qeqeW6Du6JiIcEj4qZo3AsrlVjOCKtr2v6VKpxaPtIE2xerBAGWacOBkOhWvgo75Fff2nLFlRGK6nkJ8O9hNSnzjuRj7a1bDaLL8fdREtDgqcslpcYzOfXY9VJo2pBMfzyn/fkDajEXEu0lLcTeR3E5z2RcBcCkV33BZgRB4ViaYODW8SKhrORSlshDDeU1ltBW9adeE6TKKy9bp9ThjpksNAWKVScE45cICUcKrFDCbHo2nBgXEuREyAI6bOq1ofisTAKSWWjl+xZUilNhqOSjvx9K7gGZyiVbW36H3R9h3HF0lYUmhm7i1BIPZloMrflYrRqsidSqhMJYK5h3GuBC9S5djBYNM9JcVqPV+IchiTbl1ZLhLqKFEYYVAoEW6iD9fipw2KwG4UQmcSjMhrCVCLjlczmNiYbS3ntRGemdbTEwWAZj0Rx89ZP7uQyRiuRQpD8oNrBxDhUCJ6UfKgzcKIZzjk3cYcsflLkMlFrmt2qhBhC7TeDNxtlW/t+v16rDVWog8HmxTcdAR3OEUWnWAXjafX+TnYcwjXqVK0ndQYOBhMIJiChUjqUXAyjny6Ux6HslVqrZUKuSowNU8epFOKFE9KU3NmXchjPFWLUzWxibEXlhp4wW7EccciCRPcmGpEjojknp3IYDck0GwPFTB+WRyR3oKmmDJtOGtCHc87en3QA4dj9OXTKGw3WMKW0DXchMXSuTkOUCVsNRsxFHR6akERy7CnjiBqShIoxjcOyOwErkSiUm6euWIzNhZPWqDGj8kjnbnEgIVNKCc4CB0qByrGuVvOwUC6Uy4X2yWmFzaXBoE6GK0qUIgF1bpOEsicYD1SUWrHp1kmn2ew0TqepYjVEjXmMNa8QCm6HICFiuWRAwUrCmp6usOFkX3HkVaizJBZMOBMSSs1KCZWHBWwQKMZ8Box0RjE1yUxKiEgxK3EWOVjA+kEVonickhmFaFjn35RMPi91Fj0cp+LDcZ6iUzq/JAPDO3eS7gnvK+QzixKpk49UsjgjV4iFd2WGFCyRWPZAKV969nRJrnwgE4uE90aZu1sIHghp6MMJ5u7WZP7rd787I8hfzn7s5CUvch4AAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default DizzyFace;
