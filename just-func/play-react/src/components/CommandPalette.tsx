
import { FC } from 'react'
import CP from 'react-command-palette'
import theme from 'react-command-palette/dist/themes/atom-theme'
import { PartialPick } from 'type-plus'
import { Command, KeyBinding } from '../commands'
import styles from './CommandPalette.module.css'

export interface CommandPaletteProps {
  commands: Array<Command & PartialPick<KeyBinding, 'key'>>
}

function toPaletteCommands(cmds: CommandPaletteProps['commands']) {
  return cmds.map(c => ({
    name: c.title,

    command: () => alert(JSON.stringify({ type: 'COMMAND_INVOKE', payload: c.command }))
  }))
}

const CommandPalette: FC<CommandPaletteProps> = (props) => {
  const commands = toPaletteCommands(props.commands)
  return <CP
    commands={commands}
    closeOnSelect={true}
    open={true}
    hotKeys={'ctrl+p'}
    theme={{ ...theme, trigger: styles['command-palette-trigger'] }}
  />
}

export default CommandPalette
