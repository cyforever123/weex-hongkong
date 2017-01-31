package hwg.com.hongkong.adapter;

import android.text.TextUtils;
import android.view.View;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import java.lang.reflect.Field;

import hwg.com.hongkong.R;

/**
 * Created by lixinke on 16/6/1.
 */
public class ImageAdapter implements IWXImgLoaderAdapter {

    @Override
    public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        WXSDKManager.getInstance().postOnUiThread(new Runnable() {

            @Override
            public void run() {
                if (view == null || view.getLayoutParams() == null) {
                    return;
                }
                if (TextUtils.isEmpty(url)) {
                    view.setImageBitmap(null);
                    return;
                }
                String temp = url;
                if (url.startsWith("//")) {
                    temp = "http:" + url;
                }
                if (view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
                    return;
                }

                //实现你自己的图片下载。
                //本地图片统一规则：drawable://act_clothes_icon
                if (!TextUtils.isEmpty(url)) {
                    if (url.startsWith("drawable://")) {
                        getImageBydrawableName(view, url);
                        return;
                    }
                }
                Picasso.with(view.getContext()).load(url).into(view);

            }
        }, 0);

    }

    /**
     * 通过反射获取drawable图片
     *
     * @param view
     * @param url
     */
    private void getImageBydrawableName(View view, String url) {
        String urls[] = url.split("//");
        String drawableName = "";
        if (urls != null && urls.length > 1) {
            drawableName = urls[1];
        }
        try {
            Field f = R.drawable.class.getField(drawableName);
            view.setBackgroundResource(f.getInt(f));
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }
}
