import Link from 'next/link';

import getLayout from '@/Layout';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <div className='mx-auto mt-2 flex w-full max-w-screen-lg flex-col-reverse items-center p-4 md:flex-row'>
        <div className='flex flex-col items-center py-4 pr-4 md:items-start'>
          <div className='text-center text-4xl font-extrabold text-black md:text-left'>
            Antarctica Explorer
          </div>

          <div className='my-4 text-center text-sm font-semibold text-black/50 md:text-left'>
            Cras sit amet accumsan nunc, non ultrices tortor. Aenean rutrum
            nulla vitae imperdiet finibus. Aenean pharetra ipsum lectus, sit
            amet porta massa aliquam sit amet.
          </div>

          <Link href='/expeditions'>
            <Button className='rounded-sm'>
              <div className='px-4 text-xs font-semibold uppercase'>
                Get Started
              </div>
            </Button>
          </Link>
        </div>

        <img
          className='object-cover md:h-[450px] md:w-[510px] lg:h-[500px] lg:w-[560px]'
          src='https://www.polartours.com/_next/image?url=https%3A%2F%2Fmedia.venturatravel.org%2Funsafe%2F1300x%2Fsmart%2Fheader_media%2Fab89b3f4-0f70-477d-861e-3f34899ad39d-antarctic-peninsula_scenery-2.jpeg&w=3840&q=75'
        />
      </div>

      {/* <div className='w-full bg-primary-foreground'>
        <div className='mx-auto flex h-full max-w-screen-lg flex-row justify-between px-4 py-4 sm:px-10 md:px-24'></div>
      </div>

      <div className='mx-auto w-full max-w-screen-lg p-4'>
        <div className='mb-2 text-center text-lg font-bold md:text-xl lg:text-3xl'>
          Cruise Lines
        </div>

        <div className='mb-6 text-center text-sm font-semibold text-black/50 md:text-lg'>
          Nulla sit amet ipsum vitae felis vulputate euismod vitae vitae quam.
          Donec diam erat, commodo sit amet maximus quis, aliquam nec purus.
        </div>

        <div className='grid grid-cols-7 place-items-center gap-2 md:grid-cols-7'>
          <img
            className='h-[40px] md:h-[52px] lg:h-[64px]'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqAF1Q4YqrxhXX9fJiBN4sB99R_ZjZM9fpw&usqp=CAU'
            alt='aurora logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='https://images.squarespace-cdn.com/content/v1/5c61d907c46f6d235ce5760f/2b05a885-416f-497f-9829-d4d89c711d0f/hx+logo.png'
            alt='hurtigruten logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='https://www.marketscreener.com/static/instruments-logo-13193667'
            alt='lindblad logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='https://shiplife.org/2020/wp-content/uploads/2019/05/Ponant.png'
            alt='ponant logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABEVBMVEX2pwX//////f////78//////v///33pgb/+/////r5///1qQD///j//f31pwj3pwD6owDupgD0owD///X/oAD7ogD5//v6//XwowD3qQD2ogD9//H//fjpqgDxqwD5//nnpgD/+eb45sX34K/uvGr5//Dwzn//99zmqRzwuVb56L3vsC/12qTz//zspBjtqSXxtkXvsj7nsiHnvj/v1pb58Nb616n0wlfstzjpwUzx1o3wynj88c736rvwtFXxv17t03X47LD9+9b+8N3yz2/+6rT5/OL246HzzXz95svq0oHvuV7y5JrpxF3005jsxXXhuDHyr0H9/Mr43rj2zYf0wXbmtBbz05z14JXs23XqzmVdScJIAAAUKUlEQVR4nO1dC3ebONo2QiAsQBcwGAsbm2YSO7fm0qRxE3vTJmnSy6SdS3a2u///h3zCne1MN6kwGJx85/g5c8m0HdCDpPeuV43GCiussMIKK6ywwgorrLDCCiussMIKK6ywwgorrJAP+tePhJCH/wxCaDmDqR5BIOTYic0lB0o7tEEFY0xk/5D/QoSTDI0Zwc5jD7YUksRGDcpaLckhiqLne9v7GTb3Dw4GvQHn3AtaraCR9HocsccebCkEGQQ/fLFxtPZseB37bcM0DE3THd+J0+NnL+9Oxr1BJD8Bs+3HHmwJUA/xw1enW8euFbchhEDTNPBftPv9EO9iHPqTm7N9OaE0/4FPApTKBYmYsGkQjV6sTWINhmHTgZqrS366Cf+EZkq2brdrutl/6Ol04x9CeJRwuW0Z7ZCnK3oyyYF6thC/bkz9bNLmBDTSdO3cE17AOpzbT1i4UiQQFaPXk2YYhrvzM8TQ7GumJNnzApuKp0uwEbCk99ObVM6J4RrdefkZjmEYpqu1+3B4eiiVyY8056MD0Wjwabhu4VBzDX3+GfwqgRwfWG6IjbevOHtyukNqdCQ48w5uruWMzMZciOB3gNrwins2QYw+HR1CpHSwJb9Yd8CfDMvDgbh9seEFvMfJk9mRAtl8ey3FUC63hRma/RAAeP26x4LgyWzIQBx+STVJztD18svzT0DdNJvhrn/58TlCj8wQIblRWIewwVWqYd8Fmm4UkzAPQa4BaQVYADenmx6T3skjrlSaCRi7Jfa3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'
            alt='quark logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBMRERMXEREWFxMZFhYWERYXFhEWFhgXFxYWFxYZHyohGRsmHBYXIjMiKSstMjAwGSA1OjcvOSovMC0BCgoKDw4PGxERGy8mISgvLy8vLTQwOTIvLzEvMS8vLy8vLy8vLy8vLy8vLy8xLy8vLy8xLzEvLy8vLy8vLy0vL//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwYCBAUHAf/EAEYQAAEDAgMEBQoCBwUJAAAAAAEAAgMEEQUSIQYxQVETUmFxkQcUIiMyQoGhsdFywTM0c4KSwuFDYqKz0hUWJCU1U3Sy8P/EABoBAQACAwEAAAAAAAAAAAAAAAABBAIDBQb/xAAzEQACAQICBggHAAMBAAAAAAAAAQIDEQQhEzFBUWGhBRIycYGR4fAVIjNSscHRQuLxI//aAAwDAQACEQMRAD8A9xREQBERAERUzymyObTxZXFvrOBI913Jaq1TRwc7XsTFXdi5ovFIqx1hd77/AIj91l54eu/xP3XM+Lr7OfobtBxPaUXivnh67/E/dPPD13+J+6fF4/Zz9CdBxPakXi3nZ67/ABP3Tzs9d/ifunxeP2c/QaDie0ovF/Oz13eLvuvvnR6zvF33T4vH7OfoRoOJ7Oi8Y86PWd4u+6+ednru8XfdPi8fs5+g0HE9oReLednrv8T9087PXf4n7p8Xj9nP0J0HE9pReLeeHrv8T918Naeu/wAT90+Lx+zn6EaDie1IvFDiB67vE/dGYlYi7n2/EfunxeP2c/QnQcT2tFV9harpYpHC+UOAF9dba/UK0LqUaiqQU1tNMlZ2CIi2GIREQBERAEREAREQBUryo/q8X7T+RyuqpflQ/V4v2v8AI5Vcb9CfcZ0+0jztm5ZLFm5ZgLybLx8WQC+gLMNUAwAWQasw1ZBqAjyr7lUmVfcqAiyr5lU2VMqAgyrEhbcUDnuDGNLnuNgANSVedn9jWRWkqAJJN4b7rO/rH5KzhsJOu7R1bXsXvcjCc1HWUzCtnqmpsY2WYffdo34c1aqDyexgXmlc48mWaPEgk/JWTFMbp6YeseL8Gt1d4DcqlWbdTSEtp4g08Cbvdb8I0B8V1NBhMPlUfWlu18l+zT1py1ZFlpdlKKMaQNd2vu+/8RK3RQ00egjiZ+4wfkqCYsWqd/SZTzcI2n4CyxGyeIkhxDSR1pL/AJrdHEtL/wA6D8kvxcxcN8j0qEssQzLYb8ttD8FKq/spQzwtkE7WtJLcuV172Bv9VYF0KU3KKbVuBqaswiIthAREQBERAEREAREQBUryo/q8X7X+RyuqpflQ/V4v2n8jlVxv0J9xnT7SPPGDRSgLGMaKZoXkmXj4Asw1ZNapGtQGAasw1ZhqzDUBGGr7lUwavuRAQZFnHATYAXcSABzJ3KaKK5Vs2TwwXNQ+1m3DL8Os78vFWMNh5VpqK/4t5hOXVVzd2fwVlHGZJCOlIu95IswcWg8AuNie0c9TIYaNrg3dmA9J/aOq1bNYZcSkyR3jpWnV5/tCOIHHsHxXUfNSYfHl3HkPSe/tP9bBdrtR6tN9Skv8tr7uHHbsK+p3eb3HIwzYhvt1Ly92/I0m37zt7vhb4qzw08FO30Wsib3BvzVTn2irKk5KaItHMDMfi46BQf7pVk5zTytbfX0nF7ge4aeBUUasIK2GpN8dXN5+BMk322WqbaKkZvmYeGhzfRaztr6MGwkJ7o3n8lx2eT8e9UuP4YwPqSjvJ833al4PAlgP5rY6uNeahHz/ANiLU95asOxGOcEx30OtxbfuK3VxdnMGdSNeHy9MXEEHJlsAO8812leouTgnNWe01StfIIiLYQEREAREQBERAEREAVL8p/6vF+0/kcroqd5S2Xp4zykHza/7KrjfoT7jOn2kefxjRTNCjiGi2GheTZePrWqVrUa1StaoB8a1SBqya1StagIwxZZFKGLLIgJKKmLrAb3EAfFW6rpC5rKVmkeUGRw5D3R2uPyXKwGC8sfZr4AlWKu6R1mR+jm9p/UHZzcflvXewFFaJvPOy79tuF9vDzK1WWZzK/Eej/4ajZmlAt6I9GLtJ3X14qCg2Wbm6Sqd00h1Iv6PxO8/RKjGIaRpigb0j/eN9M3EudxKrlfic036R5t1RoPALGviaMZXqfO1qiuyv6/N7khGDerL8l4fidLAMpkawD3W62+DbrQk2wphuzu7mW+pCo5aAonOK0S6WqvspLn+1+DJUIl6O2VP1JP4W/6l9ZtjTk2ySfwt/wBSoDpCvkExDx3qF0rVvs8vUnQxPWaCtZM3MwkgaG4IIK21WtkJb9K38J+o+ysq7tCo5wUn7zK0lZ2CIi3GIREQBERAEREAREQBVbyix3owerIw+Ic381aVwNt4s1DN2ZHeD2/ldV8Wr0Z9z/BlDtI8xhGi2mBQU+5bLAvIvWXyRgUzGrBgU7AoBk1qla1GBStagPgasmsUjWqSNut0SB3Nn4/WX5NP1H9VrbS4w4kwxGw3PcN/cCtuicYqaSXcSNPoD4lViNl7krrVq7pYeMI5da78NnmjRGKcm9xCI7LBzVtuaoXhck3mq5qgeFtvCgeEBqvCiaPSHeFsPChaPSHeiIL1sefTk/C36q1qqbHj05Pwt+qta9Zgvorx/JSqdoIiK2YBERAEREAREQBERAFz8ehz00zOJY+3fbT5roLFwuLKGrqwvY8XpltxpiWHS08jg9ha25sbeiRfSx3KOOVeLnFxfVlkzoJm4wKdgWrHKFOyQLGxJtMCmYFrRvubAEnsF11aLCJ5bHLkbzOny3rZTpTqO0FchyS1muF18KwoyEPeLR8uLv6Lo4fgccdnP9N/buHcPutyeps4Rt9s/wCEcyutQ6NVNdev4R3vj/OdjRKtfKJobT6U+UaAkC3YAT+SrEbdFaNqf0LfxD6OVbYNAtHSv1vBGVHskbgoHhbL1A9cw3Gu8LXeFsvUD0BrPUcTbuHepXr5Stu8KYq7RBd9jWfpXfgH1P5hWZcPZJloC7rPcfCw/JdxetwitRj715lGfaYREVkxCIiAIiIAiIgCIiAIiIDB7ARYgEdoWjJgtM43MLL/AIQPouiihxUtauSnY5X+7tJ/2W+Lvus24HTD+yb8Rf6roOeBvIHxWjU4vBGbOeL8hqfALTKnRhnJRXgiU5M2oaZjBZrA0djQFI4ganRVyp2obe0TC7+8TYeG/wCi5FViEkp9N5t1RoPBU6vSdGmrQz7tXnq8rmyNGT1lhxDGgPQi1PF/BvdzKlwanNs7r3O6+88yVz8Hwgvs+QZWbw3i7v7F2Wz55MjfZZ7XK/AfBY0NJUkq1bujHv279W/PwSJlZLqx8Wc/aqS0bG83X8B/VV9m4Lp7WS3kYzk2/wAXH+gXLuuZ0lPrV5cMuRtoq0TF5UL1I4qF5VA2kT1rvUzyoHlAQvWdGN5Ubyujg1N0kkbOs4X7t5WylFylZe9hjLUX7B4OjgjbxygnvOp+q3l8Gmi+r2UYqKSWwoN3CIikBERAEREAREQBERAEREBXNtKiaKBssLywNdZ9uIdoD428VT/9uTye1M7xt9F6TiFI2aJ8btz2kd3I/A6qjRbDVFzeRgHMFxJ7bWH1XHx9CvKonTu01nZ+qLFKUUszmuqC72nud3uJ+qxbKArPSbDtH6WUv7Gty/M3XcosBp4fZjBPN3pH5qnDoqtJ3nZc378TN1orUU+gw6eb2WWb1joPH7K1YXgMcVnP9Y/tGgPYPzK7IVfxnaFsd44jnk3E+6z48SuhHCYfCrrzd+/9Lf5vianOU8kbWNYr0Xq2ayO/wDmVlgUOWPMfe58hx+OpVdwakdPISSXC93uP0vzVkxysEEDiNCRlaO06fIXPwShVdSUsRPKKvb9+/wCCUbfItZU8Sqelne7hfTuGgUZctWE6KQuXn6k3KTk9bLSVjJzlE9y+Oco3OWBJ8eVA8rJzlC8oD40XNlb9jKXM98vBoyjvO/5fVVOnbx48F6XglF0MLWe9vd+I7/t8F1ei6PWqdbdn/PfA0VpZWOgiIvRFUIiIAiIgCIiAIiIAiIgCIiAIiIDEkDU6LkV20tND74kdyYQ7xI0CoG0TJ4p3RzPe9oJLC5xILTuIv4LSjfcgNFydwGpJ5ALiYjpWcW4xha2Wf8y/JYjRTzuWTFNpJZ7tb6qPkDqR2n7LXwfD3zvyxizR7T+DR9+xbuDbKSSWfPeNvV95w/l+qulJSsiaGRtDWjgPqeZWFHBVcRLSV27c3/FzJlUjFWiY0FGyFgYzcN54uPElUraXE+nmytPq47gdp94/L5LpbWY9lvTxH0zo9w90HgO1VKPROkcSktBT1LX4bP6KUP8AJm2HL4XqHOvheuMWCQuUbnLAvWBcgPrnKLeUc5ZQtJIAF3EgADeSdwUpXB39lcP6WYEj0I7E9p90f/cl6AubgOHCnhaz3jq883H7bvgukvV4KhoqST1vN++BRqS6zCIitmAREQBERAEREAREQBERAEREAREQHOxbB4aprRM2+U3BBsRzF+Szw/C4IP0UbWHibXcfidVvLTxKd8cbnsZ0jmi+W9iRxt2rW4QT69s99sybvUbTiALnQfRU3aLa0C8VMbncZBuHPLzPaqzim0c9UbPdkZ1BcN/e63xWg0ri4vpRyXVpZLft8N357ixCjbORO08eKkzrXDl9zrjFgnzr4XqHOvmZASl6wLlgXLG6AkarhsVhGY+cyDQXEYPgXfkuJs1grqt+txC0+ket2A816ZFGGtDWgNaAAABYADcAF2ejMJd6WSyWri9/hs49xXrTt8qJERF3isEREAREQBERAEREAREQBERAEREAREQBERAUba/ZPMXT07fSNzJGPeO8ub28xxVGZJwO9e5KrbS7Ix1JMkZEc3HT0JPxDge1cjG9Hdf56evat/d7zN9OrbKR54HL7mWFfRS07+jlYWnt3HtB4hRNkuuDKLi7Mso2My+ZlFmWIdc2GpO4DeViSTFy62z+BSVjuLIgfSfb5N5ldLZ/Yx8ln1N42dQaOf3n3R8+5egQQtjaGsaGtGgAFgF18H0a5fNVVlu2vv3LmaKlW2SI6KlZCxscYytaNB9zxK2URd9K2SKoREUgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDVrqGOZhZIwPaeBG7uPBUnF/J+bl1NILdR/DueN/x8V6Ai0VsNTq9teO3zMozcdR5rQ7ATuPrZGxt/u3c49w0A77q5YPs7T0ouxl38Xu1cft8F2EWFHB0qTvFZ7/AHq8CZVJS1hERWjAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC0MXxOKliMspOUFrQGtLnPc8hrGNaN7iSAFvqu7bYC+tp2NheIqiGWOaB5BLRLHcDMBvBa5w7L34IDKkx2czRQzUU0AlzZJM8UjGlrS8tl6Nx6MkNNt4J0upNo9o2UToGOilmfPJ0cbYgy5fa4BL3NA77rjYfthPFUQ0eJU5pppTlilY4Ppp329lr97XHg0i9yFj5RLifCi1uZwrGZQXZQTkdvNjbwQHew3GJZZejdR1EAyk9JL0GS4t6Pq5XG+vLgt7Eq1kEMkz/YjY57uZDQTYX46KKhnqHOIlhZE22hbN0hJ5EZBZcLavFIxUQUz2yvYPXSiGnlnNmH1THtia4tDn66ix6MhAd7BcRZVU8NQy4ZNGyRoNrtD2h2V1iRcXse0Fc/FNpBDVMo2wSzTPidK0MMQbla7K67pHtsd3iq95Oa5kc9XhzQ9sbHmenEkMsLhBO4uLBHK1rrMkzi9rFbGNOkbjtIY2Ne7zSo0c8sFg9nENPPkgOxhe07Jag0kkUtLUhmcRTBnrGXsXRvje5jwDvANxyW7jGMw0jA6ZxBc4NYxrS6SZ53MjY3Vx+g1NgLqs08oOMRPrmGGpMUrKRocHwvZdplIk0Jl1ALSBYWte6iEhl2nLJPZp6IuhHAOle0SOHaRp+6gO2ccq7Zzhs+TfbpqYygc+j6S1+wOuulg+LQ1cfSQuJAJa5rmlj43Dex7HAFrhyIXRVCoJDFtJURx6Ry0bJJQB/aRva1jz2kPcO2w5IC0Ydjcc89RA1rw+ncxry4DKS9ocMpBudDxAUuOYmykppamQOcyFjnuDQC4houbAkC/xXC2U/6jiv7aH/JYtryim2E1/wD48/8A6FAbe0GPx0VOKiRj3tLo25WBpfeQgNFiQN55rRrdrPNiHVdLPTQEgdO4wvjYToOk6KRzmD+8RbtWn5Tm/wDLmi1/X0ul7X9azS/DvWtiFY/FnT4Y9nmmXL04kdeWSEm4dBl9FzHWtnvpyvuAtGOYxHR07qiW/RNLcxbY5WuIGbtAvfuW7TzNkY17HBzHAFrgbhwOoIPELg7axNFE2OwLDLTMLTqC0ysaQeei4JzYDITq/CJX7tS7D5Hn/IJ/hJQFwjxdjqt9Jld0jImSl1hkyvc5gAN73uw8F0lVsPe1+MTvaQWmipC0g3Dg6apNweI0CtKAIiIAiIgCIiAIiIAiIgC5GOy1bGsfSMZKWvHSRvdlMkdiCI3bg8Eg66G1uN110QFTnoZ8QlpzUQGmhglbPldIx8ksrGuDB6BIawF1zrc2A3JtthdRNLQS08YlFPUdLI0vDCWhpADSdL3KtiIDj4fX1UkmWWl6GOxOfp2vN9LDKB3+Cj2bopWdPNOLTTSueWhxcI42+hCwHdoxoJtpdzl3EQFX2pwiZ9RR1lKAZoJC2QF2XpKeQWkbfmCGuHd2qDGqGqbikNZDCJoo6eSNzRK1r873g6ZtLAD5q3ogKizBqisroKyqa2GOmD+hha/O8vkDQ6SV40FgLBovzvrYbe0GAPlnhraZzWVcIc0ZwSyaJ/tRPtqOYcNx113KxogK/wD7YrbWFA/PuuaiHo788175fhfsTZ/A3QSzVVQ8SVVRkDy0EMjYy+SKMHWwzHU6k/ACwIgKjWYZVUtbJWUjBURztYJ4C8MfmYCGyRuPo3toQbcNdFJVw1OIs6CopvNaZxaZhJKx75mtId0bRGSGgkC5J3XFtbi1IgK1t9hM1XR9FAGuk6WB9nOyizHhzte4L5thgL6hrJ6Vwir4LuhefZdf2opOcbuI+KsyICtY5SVNXRRN6Nsc/S0z5GF4LWCOZjpMruOjTb4KwTwtka5jwHMcCHAi4cDoQQpUQFM2T2Rdh1bUOY4vpHxRNgDn3dBlfI50IB9y77jvsrmiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/9k='
            alt='seabourn logo'
          />

          <img
            className='h-[40px] md:h-[60px] lg:h-[80px]'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACACAMAAABXyPc/AAABIFBMVEX///8AAADTEUXo6Og3Nzf6+voVFRWQkJBTU1POzs78/Pzz8/MHBwd9fX3FxcVQUFBbW1vu7u6mpqbWIFHUGEslJSU7Ozve3+D99/hhYWFISEhDQ0PgDEb76/B2dnavr6/30dvpiKLupbnxssIdHR353uXphqDeTXTcQGngWX3vE05oaGhUVVC+vr7sl67zvcvZMl/wrsCampq3NE/jaYriYoTmepeHh4fdSHDXKFf88PP1x9P41+AvLy/ZbYr64ujtnbLk2dzbpbRBRj9SYFs2ODA7SEPJuLqlT2TOqLLjzNLQTWmvOFGtcIDRxcnafZDIlaPHbn7zUXzsJlr0PG7xXYb2JFz/NW7PhpnEqrH/j63rLF/vUnz1bJHSkqPhu8bL+9QWAAAODUlEQVR4nO1caWPiyBHVAQgJxCHuS4cxIMwKBBGXgQV7k2zG2Z1NxjveY/b4//8iXS0JdDLgmYnshPeFnqaF6nVVV1VXt4cgLrjgggsuuOCCC/6/kWLjUYvw5UALqahF+HLIxOioRfhyyGz+h8lVGq96zaVYlq1gsOy+uW9rZTaoG5qvQaWVZKzxzVeAv2bLjUYDN7/KNVAbuv/2DepG7Swe8RU063jE34WoJT8BKU379uu/AP7x5iGj/fJPaH73/cPbTOYHq/utpv2Cm9/960HTtH/j9ve3UUt+IqpKE/BORu3Oe2g+/gr9w0do/wjd8jvcXMFoPOJDO0KBz8NKpRAKCgdMi9D+DXisFmZ3lSBafdy8Qr23U9wcRS30ydgaIDA13aL2SMfCDxHTjtlttBAls6nAYMxZlyOW+QwMscJU0Me2h3nM0LLiurjZk1G32eyiVgfTX1SjlfgcWAoD1VRnmMeig9rjAlYTWKnJHwbIuNNwPr6VV+soxD4Rnb5pmsgGiavlnpJskh5D757dCLeu9s9WFTSqAOb7UlE1DU+VUVs2XQz4xA620iI0TXZD1FLw1x370SHSY0+l+i/ZUk2FLYHHFvvE4o6w3WNxrzvgyWE1Ty0yrSVldBf9RUGOTPQTYDr/omPhgZos5w9WOMTsZdupjM3HRsXlVJ+qU/VlxwcrJsxAJQcHYsYBbKTYHlW0uHbY55iJyo7qGUukOWD9oqFQe4MbF92608EfTi1HWe0ffIpC9Ua63qNmXJSSn4Jd0c2uCARMKj3IVbCrQfY3wqrDDlKh1Kr8+3T3kv2JhRF2K/0DO4gILd0VBpBhcliHOMdUqMIqUpHPgBnasO6usDmCekYQuAtgmIZlj228OuEBhSq+bFfixEp3yG23ZnYL5ye9W9NAdUhHh9Tj6yFnqgl7iyqEcGx066XFxbRH2VQhDm0K9SSz/KuplGFHv4QMZAVLbAp9U8uTmNocm584thvU4zqTliKV+BwY+9QYOC1hrQ3twIAXW9f8xL60Rz3esWT2xQcCG1vd9pPYp+xQY2wvurblOMFvAjlOpR7pDJnWIpX4HAxtKquCqSeT5T5rbpu2C4kmWo0/xgWSzL2aQmAH/EePsBwJsLQ5VadWUJhZDgWp9D0hkiTJRizzycA5CSSR8tIyS+Ckd6wOxPZWNUMCItk04nVEbhCxzKcDFKWiQN4umg4FcxpaioOOtq1JlWr+kS8hcqVXEw1g69onTL/ZtT5hF7CzIsItbI+mtzjJfLzLpBG5VxMNuJ6pKMhH1FszrkMwtxWIVxyOhIj1O44nAbmopT4RQGrZwisNnAaEBvCMOIGG/Bl8J84oZWS2w9QGk4u9Ers0TAXtzFC2Vc2teAvZYhEH8qK9GULsn2gNcyOvX4e/HJsrDvY8ilmHBW5QN9JBXVc2NxjY7BI5k1z6NZyPECu0stQtcAA9QWkFOLWRTfbXVs3dLJhALeXpjk2b5Mh51IKfAHmBQ1rXLIVdIQK9DnGrWAcHawiBU1yDvUXNmx1Rt7iRYtSSfxxwMNIjWmg1qWt8YACF6BVynz3kLm+HSKtLBZcUYME13xMTm1uUYbx6WpFjvISFBvX1maU2mWghLepQJGlDiJiaVQUcz3/KVxIvgdxaOWEQHH7oK0hQ1BWxQmanQ46sU4Uu2qiugI5qlSvxudZTh9jsuUVplnnj4+xkJPGsBYY5rLZmRaqwaxFttAQNGQVyAwW/xc46EsAV3J86tqfEmHxZAscQf3PzEXa3SoFajGS0zGad1qxAFZXOntp4inxk/8qiVlVgK/Rjh6g5uCUi3NKx/M83xjb8++pYpZbD0axQmMqdboHSh50WMsjibF1tDZEui9ORdRZexUuv+b7q4kZGeW+F3fzya1O/CjtpQhapz0az4nI6kpFBLq62a6Q8dbhtyQayT1WRLYd0O+ojJTZ/2hGVupMbmfyvUfEjXyrd/XqDpA6itzYQtatuoWCMR32kpHZnjD7645asQEQ3Vrar7Yyx1p6MKiFcu7iRUSYonEiWHkYfmtRCkT1fId0UZ8psuZyNdz0Uxkajrk7p3dEKzFE32jaz9XiGYkOz+WjcEezATY3cRJo3C5D+bWc3TarQ764OUW9tFAozxVguh+PuglJ3bQXZXX84nCEdqUN7oW3bsz5sCpo3+hCopT3cIlUcQWggT+1uPXu8QWmH2t+ttrdcVTb05VTpL3q7tqHq/SvULOizbr+nIpWtYQpu1yNlquqw0G6eFsMHOiXVE15qUdf26BgIcT2n7+77H26azWZxqRoL5P13fb03HPfVhbEz1IXemxm9ft+4WnfWq7Fi9HRcgW7ePL774b5DV6TatU9rJFmqRMqNwDUqkINnafrPn99/aJqgipQ+RYpRZ70CVZj2C8WiPjX6Pb1oDWg+fvjt9z/ePDyw0jxAZ4DoawzSXpSyKFXyd2/vFWOh6o9PTzcBeHr6oKvqdKbs/nx7d/dWmoiNAI29FG5EvuyQJ1GuTbQ7GkFercb39/d/fG3hB/SP+/FqtWrBt3dvv2XEbOw6jBf+rei5EcTcN+Olck6cC5IGdylpC/hqpSYIzFxMlkuJUHXtsUF5V0aKuuJMl45Nf8nCUSUFYEATeaYm8lG7FOFMuU9AA9JloVGr5yLfiHvTik9Eoq5BXkIPJmJJGER9Ozjvzyyez6whsmbkzvO1eZKv5SMmhywoGfsUlGMJhFIsO2Ayhx9lS0l+w0RH6gD6U5CnWS2TYWlPspVhhJcQDi644IILLrjggpcALp6KQ67Apdx1tXgKelMpO4/gcBNGH8ak8KNc/DAI/h0/PLT/BS7l2qtVAo6HrRe4Ht7/CKtpwmSCNo30OXs+mhXL5eyAr2UbA+duKj+v12ticlO30z82u8mKYq5cPtTfUnyjnBTFZCxpD2LqNb4W29QOv0TXNvWBWGvE5k6pJgGHAlqyXB6gvW3W+1VeGsTSGGhrvEnyzIQ9sUyWr0gTfMyS5iXnfiOlMQnUKQq2nBWpBruB2OQw6XFNwNXwpGQPEuD9jbl0SO7zkgiPlZiMk5wQcLTPCgycZdUk9441P9+g3X6Wn8/nzKBsVs3K52weoHZw7d1KcXVvlRR1eG/WwRWL8sGetQRZ8ukEKmaeoykJ0Q2wzEqaLHvT6TKZzmXsN8QrUv1ccnGYMu92g02QDfebkgF3KVBf7fDINbnxVwrm/tIWFNFK/o0pmirPUcgkTcY8syVdk/Wzyu4MelnD88SEJD0i1Ui/7EnHtR/ErRFQBeHRpjTj7sKH4DHfWLrsqTqjcXWflrR0/axKEpvwWVyq4bvPg6T0/VW7gxzilg2ylwByDN6Hl73s6BiZdcqdSQdaYDJ3Xt0dfIq7OsP6L4UcJ1fZBHMDs/STK0HZOemZPQ85KJIGHbUyg/NOg6Cm5T7W5MmEd30dJUfXQ7iBC/WTywkB7DzkmJDTyHMLnKmYZ9XHS/4rdMfI5RtkNmQ+A8klcdggay4DSyWd5OjN5zrUgmjgZCP53MlRcohbqAsLJIdI4IXnWgvxgZOcEOhRnwO46JJwLPAkWfbpPpwc4uZ1tgcEay5lHRnxju54zUlu8PnOyJGUDg+CuPrLbKHkjukthBz28Pgmg+M9LnJwFvi5LhRJaAkclDUnE36LCCEnprKh6w0QSA4HzDhmd1hXLnIQnj7XJb5U2eGx442gi0oh5LI58vrYCUYgOfMYFU2L85KlixwcUX+2Q/K5Y3mjH874R4SQAwyOhNUj5Mx7KHs37SIHpuS7LRWPWx9nHp+DGWysSCUG2lkIuUbMlwG4cIwcUYGHr61Q7SPn/dUKX8uJojjIiZkzb3Xk9vZPXwcaRAg5vnJ9lN1RcpC07dnFcx5y3lBLC3N8xa82Yc8kh38Nq3sSHGBCvSUoPZzdcXIWO5wNcbyDXAb9aMNvfXBjeHMCGw9wlgIviWeD3VR4nIN5cUUsJz5CDrOwtneMgxzKVYNuq+dR9zHfHIa5FXUyaV9aiXEkQxGOsAskl3a8AU8N/mUnOS4ZsMk0s+nz9nMmIEsp48yhFvj9sdzSn0vtEUjO9RdXeGogZ3GSw3Pt/++nILY/hxyOqSyc6QcflB3dFeBrDoEXXSeB+zmXbZjsODc5vBh9kjyXHKHh2RfC8sTj+zlglw5iF7xZdRu+YCp+4trywOm7L8N9Nrl8DDb/9bCbxijRLYeT42oh7E4hZxYeeJfmTCfsdW3PJgcvTeRCNxrJgMtnjjJDHAJl2u9nTyJnLtqSu8zABEzX88nhcBzq05N+KYmsI9Jidn6vwvv/RieAnFVXcbsybAxuj/lcb2n9WnAcIALJQbp9mGwzyxc9y4QnfRmwv7JGWOzcE5vHxlBzlcKR5hrPu9Eh+SbPASjKesjFYZUeXpXCN3CybrPm/W6UCXSsjN9q4rxZr67sUxUIitnzaigOYX2WZyODU8gUcfhlDr8qIXHc/t1MwhQmte+i4aJfLk/sh3Ac3YC6nv/EgwlYElod6F0PGA3+A0KJTxxZNx/DnGwEf1GZI26QffLSXqgKnAOkkd3MHclUFl6fyFqX1PJMDD/WEAV7UtjBhkynyeuc4FPAPGDvHddqJXxCkEjj63+J2Py5998qyZCbLhWenwjSZM7zmq9PZByv41hhwojinLbIicxEmjD8YU5YnmckCQ2R/GkxE7g9rWh8LlsulUrlbI05d7PjRJg34expdk435/l0IO55jPOPCdpwhm1C43lWEAQ2/0lXMrlKyM+fS87uCiDH+Xr8j3kRT1U0TaukPoncBRdccMEFF1xwwQUXXHDB68V/AN28cEtAJM+DAAAAAElFTkSuQmCC'
            alt='viking logo'
          />
        </div>
      </div> */}
    </>
  );
}

Home.getLayout = getLayout;
