package hwg.com.hongkong.extend.module;

import android.app.Activity;

import com.google.zxing.integration.android.IntentIntegrator;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * @Title:
 * @Description:
 * @Author:16080695
 * @Since:2016/12/30
 * @Version:
 */

public class WXZxingModule extends WXModule {
    @WXModuleAnno(runOnUIThread = true)
    public void assistant() {
        IntentIntegrator integrator = new IntentIntegrator((Activity)mWXSDKInstance.getContext());
        integrator.initiateScan();
    }
}
