<template>
    <h1>アニメーションリスト</h1>
    <div class="field">
        <table>
            <tbody>
                <tr>
                    <td class="Column">
                        <Animation1 />
                    </td>
                    <td class="Column">
                        <Animation2 />
                    </td>
                    <td class="Column">
                        <Animation3 />
                    </td>
                </tr>
                <tr>
                    <td class="Column">
                        <Animation4 />
                    </td>
                    <td class="Column">
                        <Animation5 />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.BaseLocation{
    width:300px;
    height: 300px;
    transition:all 1s;
    background-color: #0bd;
}
</style>