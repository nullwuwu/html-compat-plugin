interface CompatHtmlPluginConfig {
    outputName: string;
    input: string;
}
declare class CompatHtmlPlugin {
    config: CompatHtmlPluginConfig;
    constructor(config: CompatHtmlPluginConfig);
    apply(compiler: any): void;
}
export default CompatHtmlPlugin;
//# sourceMappingURL=index.d.ts.map