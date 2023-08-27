import { useRef, useEffect } from "react"
import { Container, Space, Grid, Code, ScrollArea, Loader } from '@mantine/core';
import Editor from '@monaco-editor/react';
import ProgressStepper from './ProgressStepper';

export default function AppMain({out, initVal, setCode, theme}) {

    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.editor) {
            editorRef.editor.focus();
            console.log(editorRef)
        }
        setCode("")
    }, [initVal]);

    const getCode = (value) => {
        setCode(value);
    }

    return (<>
        <Container>
            <ProgressStepper/>
        </Container>
        <Space h="sm"/>
        <Grid>
            <Grid.Col span={8}>
                <Editor height="77vh"
                        width="100%"
                        defaultLanguage="python" 
                        defaultValue=""
                        onChange={getCode}
                        loading={<Loader/>}
                        theme={theme === 'dark' ? 'vs-dark' : 'vs'}
                        path={initVal.toString()}
                        onMount={(editor, monaco) => {editorRef.editor = editor; editorRef.monaco = monaco;}}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <ScrollArea h={758} type="never">
                    <Code block>{out}</Code>
                </ScrollArea>
            </Grid.Col>
        </Grid>
    </>);
}