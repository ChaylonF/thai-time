import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TbAlphabetThai } from "react-icons/tb";
import { BsAlphabet } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { PiFlowerLotusLight } from "react-icons/pi";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";


export default function Switches(props: {
    script: string,
    setScript: (value: string) => void,
    timezone: string,
    setTimezone: (value: string) => void,
    theme: string,
    setTheme: (value: string) => void}) {

    return (
        <section className="flex flex-col md:flex-row items-center md:space-x-4 justify-center space-y-4 md:space-y-0">
            <Tabs defaultValue={props.script}>
                <TabsList>
                    <TabsTrigger value="phonetic" onClick={() => props.setScript('phonetic')}><BsAlphabet /> Phonetic</TabsTrigger>
                    <TabsTrigger value="thai" onClick={() => props.setScript('thai')}><TbAlphabetThai /> Thai</TabsTrigger>
                </TabsList>
            </Tabs>

            <Tabs defaultValue={props.timezone}>
                <TabsList>
                    <TabsTrigger value="local" onClick={() => props.setTimezone('local')}><FaRegClock /> Local</TabsTrigger>
                    <TabsTrigger value="bangkok" onClick={() => props.setTimezone('bangkok')}><PiFlowerLotusLight /> Thailand</TabsTrigger>
                </TabsList>
            </Tabs>

            <Tabs defaultValue={props.theme}>
                <TabsList>
                    <TabsTrigger value="light" onClick={() => props.setTheme('light')}><FaRegSun /> Light</TabsTrigger>
                    <TabsTrigger value="dark" onClick={() => props.setTheme('dark')}><FaRegMoon /> Dark</TabsTrigger>
                </TabsList>
            </Tabs>
        </section>
    )
}