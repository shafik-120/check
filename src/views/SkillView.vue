<script setup>
import { reactive } from 'vue'
import MainView from './MainView.vue';

const skillData = reactive([
    {
        id: 1,
        name: 'html',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeoSURBVHgB7Z1NiBxFFMdfVc+OySSRQHJwNQkTyJd4yG5ALyHJiHgRJXvy6opXRT17MDmIIEhy0KNirp5miQiikVEIooI7ntwNge2Y1QTckNVNdne2P8qq3lnS013T3Tvdr/qD+kEzM/01s/W63nv1r48F0Gg0Go1Go9FoNBpNNWGDXPDtbwWOtST7hnFBcu/7fNvru38zcHyhv386sL8JOUCheojCf9/3+QIUmBpUk3f4Ez3DX5t8ew0KTF4GOOdzQ03JcZNvF/vvxRP9tu9Ym2+/9993YDiX+tdqBCw5rcB1QR8+neLeOgYowJTs60JBqaIBrsCga/oCHrmswpGXAS6SPvz985A9r/NtGQZjSRwLEnfVBGQqmQVxu5q88ETB3++/h6JS1TRUGOEylACVBvC7go7vvRk4ZgauWw4c727j3lu0ffdd9t0nzj0tg0aj0Wg0SBDImIWp5t66M3YJKsrGivXu4Y6ZWXDO3ACCxVeOFTfxTsmBqzcyLTOslnBV07fM/y4UA7CqGoBJhb5UoBiAMGZCFSEs8wcLpSXsArmlSuWr7ybw2G6cb1u56wx8ZkD+hYypohydCcyV7cy+ZuO4IMjeV6pGLqCScgRh4pY/BrhO2AKMlKQGuNQtfxYkcUEG0PuQMSgGoDVqQsmRuSCXOZkHYZQsyAJjeUz2CAUg+8YhLZRnQCRtFrT2ANjqfwO7ZC6oVrNNyBikDpl17oLqsWeNvfUhkENHIQ07Gw1o8C0Nzvwv8PDj6YF9sixovG2akDEoLuhw2xOrYuMAu3cXigBbWwnvdEJ7UOIaWjsgiRzBVlegCLj3/grvC3ggVjYDcDki3gBLd6AIyB6EYAwggJNa4xmAEDP2pNUHUARkNSCYQ2DIEAI0A/AHKPYHF8YFLYUNEExDKbDM2wACtGEpieSIpeFB2DPOnzchDmfXY+A0dkAagkHYDQdgHhPILUAAzwBE6CbRHWNRWRDjxrE+ehNi4Wooy1gNlbUBCCPlCsLguKmyINLYDUWCUFgABPDSUGqYsSdFBGHS2AN5waQuyClXELZrySTpoakorwF51QKpC3LL5oI8OSIBUanoznxqgUyGsFYtExBAM0BfjoglUo7YlVMckLigLMcC+UEdHc0rsknkk/AenRMViA9yoe5hdGMttRoqU0LDMoQJSKAawJMjSMw4pggDjL3xHsSRVg3tXf3U2/wwV40MIUDtlE8iR7ClfBVRmQwhy4KwQDVAGeQI2fcHZQjMQQa4NSDJD89ZkAv3hIXPwZIhBNguKD5zyN0F/T34WaEMIcAdmJVEjljLWZJei3eBWDKEADcN5XIEiemcFy1hNjcLo5JEDTWOPzf0WNAFqZQhBKgGEHLEWIKMYiOJ6jmMGDVUaEp7Lv8sPSbtilQoQwgqPzaU7Htq6DEm64hRKEMIUA1wuD1nQs6Q7epJki4MLBlCgD5RO4kcQV98FYzJs9Jj9sxnwOZHjxFRsrYTyIAEwTSUIQ80RjdAEjmC7n8C6IlJ+fXXx1MZgEa5IFkrOChDMNzZPipiQIKesYiOGW6cNJDG4zD8e+NbwRizYvygG0DMlok7J2p8UNqesagakEQHwp7rgG4AniTGP0GRnTLp+gTIvieHHgu1ASQZEKYMIcA3AEkwVD1CjhCDd0ftmhTuJ8oFQaAVzhz105vxl6sRcoQRHYSj5AjKDVD/5BtweWvZnf/Nex0WlEVh0wPHocZbvsaxZ73XKIIuyJWUP8asGD/oBhCzZSgYkeckGSMqsiQvUzq/GTzZXBec2R/BWP8H6ieegdrEC2AcfHpbMSOJDIE95RbdAN5smQRyhMiEkroaUcjk1BmgfNvBe8N2jNAj5iZIQb3vQpQhBOgxQMyWSXSi4o4ZlmA8qMCoW+U2QGI5Yin/yRoyF4QxK8aPqjXjxFO0N+oE6/MPgB6fBOP0SwCHjqCMjBOxw739B1jda2D9NBM67iqaFeNHiQHE7BISYwARiB2xXf/a+yyMQU+d9V7TzCMT87+cxTmwZq+BuzgfCrwxP9wEZJQYwMskCGlu5xp3ftbbvOv3j28aZPLMZrtg//DZleIpt7vfgX3jV/76/bYKPNQXgCxDCJQYIO3iHbLaIQzhKainTntPuXArzu05cHjBj/w9ISWUoPWEbaGmBnhyRHYLTXk1g2/Ot196PWJ2BvMDVC3OEURRjxhBr8ppkcsQpBouyFu8w0BZni419gYDZ4MH6w01i3MEURMDEsgRqhCB1l7fLHCxRa3rrWLlLyUGSCpHYCDkBcfmBb7OwOrlo3hGocQAQo6ogRvbN5wVjrXpVuweA9eKfsojWLYf2F1ARqljXpw6OkFdes513SneLmhBBog14+oNngn1Nt2KvT56gfMLu5TSNqG9GWwJYovcIqNYYbdm1yYY0GkK7CQ3yASMgOjvH/X/M3gjHrx/d8Xads3uJp3VkyWFSU3uTJ1oOo7TIkDO84JpAc6/oOKSCGvzXrpuj/au5FHgQYqZG3Juv3ykxX/eFP+BJ1O5K8Y6vEX7A89/Oge/utmBglFYA/gRtcOyLe6ijCnucs5FBfMtt8LDb8epOZ0iPOVRlMIAQQLBfCKP4KnRaDQajUaj0Wg0mpLyP1Z6YpWF+kK5AAAAAElFTkSuQmCC',
    },
    {
        id: 2,
        name: 'css',
        image: 'data:image/png;base64,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 '
    },
    {
        id: 3,
        name: 'bootstarp',
        image: 'data:image/png;base64,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 '
    },
    {
        id: 4,
        name: 'tailwind',
        image: ' data:image/png;base64,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'
    },
    {
        id: 5,
        name: 'javascript',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASTSURBVHgB7ZxNbA1RFMeP79JWJYLXEkHbZ6eJ7hDd6QIhbCReWDXFDmFJ1E6DnRI7qbAhkbSLdsXCksS22viKvucrxLwqlZb7n9dp2teZ9z1z+ub9f4lE38zcSc7/3nPPOfdkRAghhBBCCCGEEEIIIaQSWCQFMv5m8z8hM6zc+r4gWy4WogoFUIYCKEMBlKEAylAAZSiAMhRAGQqgDAVQhgIoQwGUoQDKUABlKIAyFEAZCqAMBVCGAihDAZShAMpQAGUogDIUQBkKoAwFUGaplAHxxDI5dX6r67XurncSbfyTbQixkovl4eO18uJVtbweXinWWGru1VZPSXPTuBnjtxw78k0aIn8lSMpCABD/tMz1dyu5JONzMPzde+tt47teN0K8NKLgH+7Zv++HdJz4HJgQZSNAITgrx0s8N/oH19hi9Fx/E4gIod4D8jW+A545bZ7NtrpKQWgF6BtYU5DxHfDs3XvrxG9C64Lg972orZ6UvXssSZoZPjS8whh7uft9NVPiN6EUYGi4ynP2Y4PtOPFlzm8PH62VGz2Rmb+bG8fl8oVRiTb9Fr8JpwAjVa6/19ZMzjM+OHb0m4yaVdA/UCcdJ7/Y4WhQhDoKSqcmg0s5dyZuDP818DygojLhpMkJMkU2QRsfhFKAeg9Dwvg3bkUCCS9zJZQCoKwAf+8GEq1YZ6Mdpi4EQikAjN+2y/K8jgipq3ujHDoetYUYTRSeLxRLaPcAhJteq8DBEeJwLCpXrm1UESK0AmAfOHs6kfP9cE0aQoQ6CjrQ/kMuXfiYdSXMBkKgDvT0ea0EQejDUIjQe3vE7Ak/c34Gruni5c2B1IIqIg+AO+ru+mCvhp0tYzk/h3qS3yuhohIxrIbb199K750ROWAOXnLhqtmk/cwbKvJMGHnCpYsf5UnvUFYhYPz+wTrxi4o+lIdrcoTI5JqePl8tfsGuCJneI658MGVo9/Kz13lBKSgLAYrxwch0c3keoerBdnd3FPcxL1AXIHVwvsUuknlhjXkb0CvGf/FqlT0uMt1MY2ujdh6AdpGbt+qlbzBVFEMnQtvun9La8mvevf0ZCmfpPUEQFOGjM679vPl/Q2TC9TBmNg8eubeu5JPI5YvKCkCCc/j49jlGAl3XNs0rA2AmP/PYBKNpPhsnYbHOpnnjpt653l4RGC8dPIdrXseY+eQO+aKyAqzk0pnOtNnAAKjHNE+Xk+OJ5Rk7G9KPDiFIxMx0y+NIEqsMZQanG85+Z5Z3gEyV1WJR+WoiNsVY57aioov6DRPSY5Kq9FMsuKDYqcaSJU94z5P7r7PeV1ZfTcTsRmmgGN967kzC9QgRISWEKYXfRvsKxvITtSgI7gJFMsywfIBRkDy17bZKPnb6e9xWWKlR/3ArXAWaYvsG6rK6JGyGKKjlYxQ7Isph7NmgQRddEvk0ZhXqghbUl3NTreNVMmo2RSf2bzCzuNmEmq0tyaI61VBOeGkiIEQ8eIczPmY62lXQhNW6Y0z2t38v6D2hEKCc4aeLyxQKoAwFUIYCKEMBlKEAylAAZSgAIYQQQgghhBBCCCGEkAD4D1t8ruwdQCb8AAAAAElFTkSuQmCC '
    },
    {
        id: 6,
        name: 'gitHub',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAYAAAANWhwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUSSURBVHgB7ZxNbhs3FIDfG8leGAWqniCaJu1aAiLBu8q7NlFQ3aDuCdKcIMoJnJ6g7gmiomq3VneF3SLqto07zgmiRQIEzmgYPiVKkLElzZAc/jjvW+mH0Ej8/MjHR44BGIZhGIZhGIZhGIZhGIZhmNUgBEjS3+0JmN+XD1v0XABOovr5vXg0PYMACU5C0u/eFwDDS96apZnY+/L3kykERlAS1ghYEqSIYCQUELAkOBFBSCghYElQIryXoCBgSTAivJagIWBJECK8lZAMOi2R4mPQx3sREXhKPDqZZii+B30a9QiP/r3VaYGneD8nPLnT2Y8E/gT6eBsRXkXCk2+6g/xrN349ObzqEeGNBJqEoxo8Or3dufBXf9VFeDEc5bMgIcTh9d9OLnT6VR2anEtYlYZ+TCKcSti0DvhYRDibE4osxBBxf9UcgWkU4/Odzz4fHyNmoi1f/hnK48Uc4SQSyq6EV0XEhc+VnSlkp8qHDSiH04iwHgkqpYhVEZEnlp0oBD6A8jiNCKuRoFsLmkO298X4r8mmdv/3u8+gfDQQTiLCWiQYKMZBEQGEvE6hdpfgJCKsSDAhwCLWRVQuwaSAZLDbLNIOQRRqtwarIiqVYDoCsjTbL9QO4UfQx5qIyibmioagGdbP20WOtoS0oKskEiqcAxpivn2U3O5+t6lhSEU/4xIqn4QFNAXCYX5+SAatZr5pKCKMSnCZBWXp9j5dP/96CCKMSfAhDaXrhyjCiASf1gEhitCW4ONCbJ2IeZrtUdUV61FMZRDwoPqqlaK6FECdGI/+PFs+P+13h/LHfNDx8vkwHh9vLOi5rr4qR8Kb4+l+lyJWRUQeqr5mMFcZqoxEhLKEt/cHeA+J+K9/s7ep3Y3x3yPZegLlaWxFcAAaaMwJ2INAqGc4K9JOCvsHFBCAbiJBUuiHecF2reB3RdXfpLJ38Q4NCSKY8/9pmjaLtJPbqIXa5UG1YewdyhIwg3sQSDREEPUKtYvwK1AgBaGypfr+uqAIZRQy36Y823sRMlW9uymDWWRRsi4FJZHzyIOiO36r0FqsBSSiUa/ho+TWzW/zb8jCXyO50zlQSbdJwPXx8RA0qYMmJEIudvYUFzv2oOprFI2SfmeSAf4RgXg2zyAWKciyOJb+3qYEENoSiGBEwCKd7MnhSS40Uc4BoIRJAYSxKmpIc4QOpgUQRvcTrrqIKgQQxnfW7IgQs9nspVXRVQkgKtljrljEFNNauz2ZfvDZ1EHUUVABVQogKj0GqVEivhwBZ/hipx1PJivlnvY7DxHwLhiiagFEpeeOTEfEYn9gjQAiqr8amrqeDQFE5SfwTIqYvTj/ZVObeETDlH5dy5YAwspZVFMi8vPASgQ+BQ1sCiCsnco2IeJxr1VsbkFxDRSxLYCwepOIrojGTn1jlfPNITC1DScXAgjrd+roiBC16OHGaJhvKWVGrgQQTm4cVBYhi3CffrJ9dNmRR2Jx+kPgD1ASlwIIt7fQqq4jUK4XMjGZZ7jIlmo1cU125EBlGHItgHB/M7npBV0JfBBA+PFvFRyI8EUA4YUEwqYInwQQ3kggbIjwTQDhlQSiShE+CiC8k0BUIcJXAYSXEgiTInwWQHgrgTAhwncBhNcSCB0RIQggvJdAqIgIRQARhASijIiQBBDBSCCKiAhNABGUBGKdiBAFEMFJIJKvd5uwlR0IIXpvX5rOQWifjmYYhmEYhmEYhmEYhmEYhmF85DUcUCZHM4sgmgAAAABJRU5ErkJggg== '
    },
    
])
const progressBar = reactive([
    {
        id: 1,
        name: 'html',
        percentage: '80',
        color: 'red'
    },
    {
        id: 2,
        name: 'css',
        percentage: '75',
        color: '#0048E1'
    },
    {
        id: 4,
        name: 'javascript',
        percentage: '65',
        color: '#EFD81D'
    },
    {
        id: 5,
        name: 'bootstarp',
        percentage: '85',
        color: '#8512F7'
    },
    {
        id: 6,
        name: 'tailwind',
        percentage: '80',
        color: '#36B7F0'
    },
     {
        id: 7,
        name: 'github',
        percentage: '50',
        color: '#000000'
    },
    
])
const otherKnowledge = reactive([
    {
        id: 1,
        name: 'Digital Design'
    },
    {
        id: 2,
        name: 'Marketing'
    },
    {
        id: 3,
        name: 'Social Media'
    },
    {
        id: 4,
        name: 'Time Management'
    },
    {
        id: 5,
        name: 'Flexibility'
    },
    {
        id: 6,
        name: 'Photoshop'
    },
    {
        id: 7,
        name: 'Digital Design'
    },
    {
        id: 8,
        name: 'Digital Design'
    },
    
])
</script>

<template>
<MainView>
    <div class="container px-4 sm:px-5 md:px-10 lg:px-14">
    <div class="py-12">
        <h2 class="after-effect after:left-52 HeadingFontStyle text-[2.5rem] font-bold capitalize animate-text">My Skill</h2>
        <p class=" dark:text-white text-[0.9rem] HeadingFontStyle font-bold mt-2">Everyday I am trying to learn something new & Explore different something new which is getting fit to the technology domain.</p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-0 gap-y-4 mt-[30px] py-4" >
            <div v-for="skill in skillData" :key="skill.id" class="flex items-center justify-center flex-wrap aos-init aos-animate" data-aos="flip-up" data-aos-duration="1500">
                <div class=" border-2 border-indigo-200 hover:shadow-none dark:hover:shadow-xl dark:hover:bg-gray-500 hover:bg-none hover:border-indigo-600 transition-all hover:ease-out duration-500 ease-out shadow-lg  p-8 rounded-md border-accent">
                    <img class="h-20" :src="skill.image" :alt="skill.name">
                    <p class="text-center HeadingFontStyle font-semibold capitalize dark:text-white mt-1 text-[1.2rem]">{{ skill.name }}</p>
                </div> 
            </div>
        </div>

        <!-- SKill -->
       <div class="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-2 md:px-5 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col-span-1">
                <h4 class="text-5xl dark:text-white font-medium mb-6 animate-text">Working Skills</h4>
                <div v-for="progressbarData in progressBar" :key="progressbarData.id" class=" mb-7">
                    <div class="flex justify-between py-1">
                        <span class=" text-base text-gray-lite  dark:text-[#A6A6A6] uppercase HeadingFontStyle font-bold">{{ progressbarData.name }}</span>
                        <span class=" text-base font-semibold text-green-500 pr-5 ">{{ progressbarData.percentage }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                        <div class="h-1 border-indigo-300 border rounded-full" :style="{'width': progressbarData.percentage+'%', 'background': progressbarData.color}"></div>
                    </div>
                </div>
            </div>

            <div class="col-span-1">
                <h4 class="text-5xl dark:text-white font-medium mb-8 animate-text">Knowledges</h4>
                <div class="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                    <button v-for="knowledge in otherKnowledge" :key="knowledge.id" class="resume-btn text-[15px] cursor-pointer hover:shadow-sm hover:shadow-indigo-300 duration-300 transition-all ease-in-out">{{ knowledge.name }}</button>
                </div>
            </div>
        </div>
       </div>
    </div>
</div>
</MainView>
</template>

<style scoped>

</style>