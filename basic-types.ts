// *********************************************************************************
// ******************************* Basic Plugin Types ******************************

type APITypes = {
    readonly show: (
        html: string,
        options?: {
          /** If true, display a iframe. Otherwise, hide the iframe and plugin works like headless mdoe. Default value is true. */
          visible?: boolean;
          /** Initial iframe width of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not horizontally extended. */
          width?: number | string;
          /** Initial iframe height of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not vertically extended. */
          height?: number | string;
          /** Override whether the iframe is extended. This option is only available for widgets on an extendable area on the widget align system. */
          extended?: boolean;
        },
      ) => void;
      /**
       * Sends a message to the iframe's window shown by the show method. Sent data will be automatically encoded as JSON and restored in the iframe's window. So any object that cannot be serialized to JSON will be ignored.
       */
      readonly postMessage: (message: any) => void;
      /**
       * Resize the iframe by the plugin. If width or height is undefined, it will be auto-resized. If a number is specified, it will be treated as pixels.
       *
       * If plugins try to resize the iframe by specifying size in the iframe's internal HTML, for example, in the body style, or by updating the CSS, iframe will not actually be resized. In that case, plugins need to call this method explicitly to resize the iframe.
       */
      readonly resize: (
        /** Width of the iframe of the widget. This field is only available for widgets that are not horizontally extended. */
        width?: string | number,
        /** Height of the iframe of the widget. This field is only available for widgets that are not vertically extended. */
        height?: string | number,
        /** Overrides whether the iframe is extended. This option is only available for widgets on an extendable area on the widget align system. */
        extended?: boolean | undefined,
      ) => void;
      readonly modal: {
        readonly show: (
          html: string,
          options: {
            /** If true, display a iframe. Otherwise, hide the iframe and plugin works like headless mdoe. Default value is true. */
            visible?: boolean;
            /** Initial iframe width of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not horizontally extended. */
            width?: number | string;
            /** Initial iframe height of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not vertically extended. */
            height?: number | string;
          },
        ) => void;
        /**
         * Resize the iframe by the plugin. If width or height is undefined, it will be auto-resized. If a number is specified, it will be treated as pixels.
         *
         * If plugins try to resize the iframe by specifying size in the iframe's internal HTML, for example, in the body style, or by updating the CSS, iframe will not actually be resized. In that case, plugins need to call this method explicitly to resize the iframe.
         */
        readonly resize: (
          /** Initial iframe width of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not horizontally extended. */
          width?: number | string,
          /** Initial iframe height of the widget. If not specified, the iframe will be automatically resized. If a number is specified, it will be treated as pixels. This option is only available for widgets that are not vertically extended. */
          height?: number | string,
        ) => void;
        readonly close: () => void;
        /**
         * Sends a message to the iframe's window shown by the show method. Sent data will be automatically encoded as JSON and restored in the iframe's window. So any object that cannot be serialized to JSON will be ignored.
         */
        readonly postMessage: (message: any) => void;
      };
}

// Full API types: https://github.com/reearth/reearth-web/blob/main/src/components/molecules/Visualizer/Plugin/api.ts

// *********************************************************************************
// *********************************************************************************